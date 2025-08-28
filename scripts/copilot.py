import requests
import json
import time
import os
import argparse
from textwrap import dedent
from tqdm import tqdm

# Implementation orginally based on https://github.com/B00TK1D/freegpt/blob/main/chat.py
class Copilot:
    MODEL = 'grok-code-fast-1'

    def __init__(self):
        self.token = None
        self._authenticate()

    def _setup(self):
        resp = requests.post('https://github.com/login/device/code', headers={
            'accept': 'application/json',
            'editor-version': 'Neovim/0.6.1',
            'editor-plugin-version': 'copilot.vim/1.16.0',
            'content-type': 'application/json',
            'user-agent': 'GithubCopilot/1.155.0',
            'accept-encoding': 'gzip,deflate,br'
        }, data='{"client_id":"Iv1.b507a08c87ecfe98","scope":"read:user"}')

        # Parse the response json, isolating the device_code, user_code, and verification_uri
        resp_json = resp.json()
        device_code = resp_json.get('device_code')
        user_code = resp_json.get('user_code')
        verification_uri = resp_json.get('verification_uri')

        # Print the user code and verification uri
        print(f'Please visit {verification_uri} and enter code {user_code} to authenticate.')

        while True:
            time.sleep(5)
            resp = requests.post('https://github.com/login/oauth/access_token', headers={
                'accept': 'application/json',
                'editor-version': 'Neovim/0.6.1',
                'editor-plugin-version': 'copilot.vim/1.16.0',
                'content-type': 'application/json',
                'user-agent': 'GithubCopilot/1.155.0',
                'accept-encoding': 'gzip,deflate,br'
            }, data=f'{{"client_id":"Iv1.b507a08c87ecfe98","device_code":"{device_code}","grant_type":"urn:ietf:params:oauth:grant-type:device_code"}}')

            # Parse the response json, isolating the access_token
            resp_json = resp.json()
            access_token = resp_json.get('access_token')

            if access_token:
                break

        # Save the access token to a file
        with open('.copilot_token', 'w') as f:
            f.write(access_token)

        print('Authentication success!')

    def _get_token(self):
        # Check if the .copilot_token file exists
        while True:
            try:
                with open('.copilot_token', 'r') as f:
                    access_token = f.read()
                    break
            except FileNotFoundError:
                self._setup()
        # Get a session with the access token
        resp = requests.get('https://api.github.com/copilot_internal/v2/token', headers={
            'authorization': f'token {access_token}',
            'editor-version': 'Neovim/0.6.1',
            'editor-plugin-version': 'copilot.vim/1.16.0',
            'user-agent': 'GithubCopilot/1.155.0'
        })

        # Parse the response json, isolating the token
        resp_json = resp.json()
        self.token = resp_json.get('token')

    def _authenticate(self):
        self._get_token()

    def chat(self, messages, model=None):
        if model is None:
            model = self.MODEL

        if self.token is None:
            self._authenticate()

        try:
            resp = requests.post('https://api.githubcopilot.com/chat/completions', headers={
                'authorization': f'Bearer {self.token}',
                'Editor-Version': 'vscode/1.80.1',
            }, json={
                'intent': False,
                'model': model,
                'temperature': 0,
                'top_p': 1,
                'n': 1,
                'stream': True,
                'messages': messages
            })
        except requests.exceptions.ConnectionError:
            return ''

        result = ''

        # Parse the response text, splitting it by newlines
        resp_text = resp.content.decode('utf-8').split('\n')
        for line in resp_text:
            # If the line contains a completion, print it
            if line.startswith('data: {'):
                # Parse the completion from the line as json
                json_completion = json.loads(line[6:])
                try:
                    completion = json_completion.get('choices')[0].get('delta').get('content')
                    if completion is not None:
                        result += completion
                except Exception:
                    pass

        return result
    
    def list_models(self):
        if self.token is None:
            self._authenticate()

        try:
            resp = requests.get('https://api.githubcopilot.com/models', headers={
                'authorization': f'Bearer {self.token}',
                'Editor-Version': 'vscode/1.80.1',
            })
            data = resp.json()
            if 'data' in data:
                models = []
                for model in data['data']:
                    models.append({
                        'id': model.get('id'),
                        'name': model.get('name'),
                        'vendor': model.get('vendor'),
                        'preview': model.get('preview', False),
                        'category': model.get('model_picker_category', ''),
                        'enabled': model.get('model_picker_enabled', False)
                    })
                return models
            else:
                return []
        except requests.exceptions.ConnectionError:
            return []

if __name__ == '__main__':
    client = Copilot()

    parser = argparse.ArgumentParser(description='Process markdown files with Copilot.')
    parser.add_argument('--input-dir', help='Input directory containing markdown files')
    parser.add_argument('--output-dir', help='Output directory for processed files')
    args = parser.parse_args()

    # Interactive folder selection
    if args.input_dir:
        input_dir = args.input_dir
    else:
        input_dir = input("Enter input directory (default: ./src/content/docs/lerninhalte): ").strip()
        if not input_dir:
            input_dir = './src/content/docs/lerninhalte'

    if args.output_dir:
        output_dir = args.output_dir
    else:
        output_dir = input("Enter output directory (default: ./src/content/docs/lerninhalte_revised): ").strip()
        if not output_dir:
            output_dir = './src/content/docs/lerninhalte_revised'

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    markdown_files = [f for f in os.listdir(input_dir) if f.endswith('.md')]
    # Only process files that don't already exist in output directory
    files_to_process = [f for f in markdown_files if not os.path.exists(os.path.join(output_dir, f))]
    skipped_existing = len(markdown_files) - len(files_to_process)
    markdown_files_tsv = '\t'.join(markdown_files)

    prompt_template = dedent("""
        <task>
            You are an encyclopedic editor writing in German. Rewrite the given
            Markdown document to improve clarity, coherence, structure, and accuracy
            while preserving meaning. Produce neutral, precise, reader-friendly prose
            suited to a modern encyclopedia.
        </task>

        <style>
            Maintain an authoritative, formal register, but keep language plain and
            readable. Vary sentence length for rhythm; avoid jargon when simpler words
            suffice. No first- or second-person address; use third person and
            impersonal constructions. No marketing tone.
        </style>

        <tone_techniques>
            - Prefer concise sentences; combine only when it improves flow.
            - Mix short, punchy sentences with longer ones for natural cadence.
            - Use brief clarifying asides when needed, but avoid chit-chat.
            - Keep metaphors rare, neutral, and helpful; avoid tech buzzwords.
            - Show empathy implicitly through clarity; do not address the reader.
        </tone_techniques>

        <rules>
            1. Output language: German.
            2. Formal encyclopedic tone; third person only (kein Du/Sie/Wir/Ich).
            3. Preserve all substantive information from the input; do not invent.
            4. Ensure clarity, coherence, and correct grammar.
            5. Headings only H2 to H4 (## ... ####). No H1 in the body.
            6. Provide YAML frontmatter with 'title' and 'description'.
            7. Begin with a lead paragraph summarizing the topic.
            8. Use bullet or numbered lists where they aid understanding.
            9. Verify facts against the input; if uncertain, omit or mark as
                "[Beleg erforderlich]".
            10. Cross-link to other repository articles when relevant and present in
                the provided file list. Use the format [Label](/open-fidup/lerninhalte/<file-name>).
                Cross-link inline; do not add a separate "Siehe auch" section.
                Example good: "[KPIs](/open-fidup/lerninhalte/kpi) sind zentral."
                Example bad: "Siehe auch [KPIs](/open-fidup/lerninhalte/kpi)."
            11. Visualizations: include tables or Mermaid diagrams inline without meta
                commentary or placeholders. Do not write phrases like
                "Ein Mermaid-Diagramm zeigt ..."; just include the diagram or table.
            12. Do not link to pasted images. Replace image references with an
                alternative visualization if useful.
            13. Math: inline math with single dollar signs, e.g. $(x_i)$; display math
                with double dollar signs. Escape special characters where needed. Replace invalid LaTeX from source document to ensure correctness.
            14. Do not drop edge cases, definitions, caveats, or examples present in
                the source.
            15. Use CommonMark Markdown; avoid raw HTML unless necessary.
        </rules>

        <linking_policy>
            Use only files listed in <files> to build links. Match by the slug (last
            path segment). Link a given concept once per major section at most. If no
            exact match exists, do not link.
        </linking_policy>

        <process>
            1. Read the input and extract key topics and structure.
            2. Decide on a clear outline (H2–H4) that preserves the input's scope.
            3. Identify terms suitable for cross-links based on the provided files.
            4. Replace image mentions with tables or Mermaid where appropriate.
            5. Simplify wording, remove redundancy, and fix grammar.
            6. Format math as specified.
            7. Produce the final Markdown.
            8. Run the checklist; output only the final document (no analysis).
        </process>

        <checklist>
            - German language; neutral encyclopedic tone; no first/second person.
            - Frontmatter with title and description present.
            - Lead paragraph included.
            - Headings start at H2; no H1 in body.
            - All original facts preserved; no unverified additions.
            - Cross-links inline and only to existing files.
            - Visualizations included without filler; no image links.
            - Math uses $(...) for inline and $$...$$ for display.
            - Spelling and grammar checked.
        </checklist>

        <context>
            Files available in ./src/content/docs/lerninhalte:
            <files format="tsv">
                {files_tsv}
            </files>
        </context>

        <input>
            {file}
        </input>
    """)

    print("[", "=" * 40, "]")
    print("")
    print("> Starting processing of markdown files...")
    print("")
    print("[", "=" * 40, "]")

    start_time = time.time()
    successful = 0
    failed = 0
    skipped = 0

    for file in tqdm(files_to_process, desc="Processing files"):
        file_contents = ''
        with open(os.path.join(input_dir, file), 'r', encoding='utf-8') as f:
            file_contents = f.read()

        if not file_contents.strip():
            print(f'Skipping empty file: {file}')
            skipped += 1
            continue

        prompt = prompt_template.format(files_tsv=markdown_files_tsv, file=file_contents)
        
        max_retries = 3
        processed_successfully = False
        for attempt in range(max_retries):
            response = ''
            for sub_attempt in range(max_retries):
                try:
                    response = client.chat([{"role": "user", "content": prompt}], model="grok-code-fast-1")
                    if response and response.strip():
                        break
                except Exception as e:
                    print(f'Attempt {sub_attempt + 1} failed: {e} for {file}')
                if sub_attempt < max_retries - 1:
                    time.sleep(5)  # Wait before retry

            if not response or not response.strip():
                print(f'Attempt {attempt + 1} failed: empty response for {file}')
                continue

            with open(os.path.join(output_dir, file), 'w', encoding='utf-8') as f:
                f.write(response)

            # QA check
            with open(os.path.join(output_dir, file), 'r', encoding='utf-8') as f:
                written_content = f.read()
            if written_content.strip():
                processed_successfully = True
                break  # Success
            else:
                print(f'Written file is empty for {file}, retrying...')
        else:
            print(f'Failed to process {file} after {max_retries} attempts')

        if processed_successfully:
            successful += 1
        else:
            failed += 1

    end_time = time.time()
    print(f"\nProcessed {len(files_to_process)} files in {end_time - start_time:.2f} seconds.")
    print(f"Successful: {successful}, Failed: {failed}, Skipped: {skipped + skipped_existing}")