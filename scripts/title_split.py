#!/usr/bin/env python3
import sys
import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    modified = False
    for i, line in enumerate(lines):
        if line.startswith('title: "'):
            # Find the first colon after the opening quote
            match = re.search(r'^title: "([^:]*):', line)
            if match:
                new_line = f'title: "{match.group(1)}"\n'
                if new_line != line:
                    lines[i] = new_line
                    modified = True
    
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(lines)

def main():
    if len(sys.argv) != 2:
        print("Usage: python title_split.py <folder>")
        sys.exit(1)
    
    folder = sys.argv[1]
    if not os.path.isdir(folder):
        print(f"Error: {folder} is not a directory")
        sys.exit(1)
    
    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                process_file(filepath)
    
    print("Processing complete.")

if __name__ == "__main__":
    main()