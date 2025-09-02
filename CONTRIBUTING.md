# Contributing to open-fidup

Thank you for your interest in contributing to open-fidup! This project is a knowledge database for preparing for the Fachinformatiker:in für Daten- und Prozessanalyse (FiDuP) certification exam.

## How to Contribute

### 1. Reporting Issues
- Use the [bug report template](.github/ISSUE_TEMPLATE/bug-report.md) for reporting bugs
- Use the [feature request template](.github/ISSUE_TEMPLATE/feature-request.md) for suggesting new features
- Use the [documentation template](.github/ISSUE_TEMPLATE/documentation.md) for documentation issues

### 2. Contributing Content
We welcome contributions to our knowledge base! Here's how to add new content:

#### Adding Learning Materials
1. Create a new Markdown file in `src/content/docs/lerninhalte/`
2. Follow the existing naming convention (lowercase, hyphens for spaces)
3. Use proper Markdown formatting
4. Include relevant metadata in the frontmatter if applicable
5. Test your changes locally

#### Content Guidelines
- Write in German (as this is primarily for German-speaking learners)
- Use clear, concise language
- Include practical examples where possible
- Cite sources when referencing external materials
- Keep content focused on FiDuP exam topics

### 3. Code Contributions
For technical improvements to the website:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test your changes locally
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Setup

#### Prerequisites
- Node.js (v18 or higher)
- Bun (for package management)

#### Local Development
```bash
# Clone the repository
git clone https://github.com/t128n/open-fidup.git
cd open-fidup

# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

### Code Style Guidelines
- Follow the existing code style in the project
- Use TypeScript for type safety
- Keep components modular and reusable
- Add comments for complex logic
- Run `bun run build` to ensure everything compiles correctly

### Pull Request Process
1. Fill out the [pull request template](.github/PULL_REQUEST_TEMPLATE.md)
2. Ensure all tests pass
3. Update documentation if needed
4. Request review from maintainers
5. Address any feedback from reviewers

### License
By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

## Getting Help
- Check the [documentation](https://t128n.github.io/open-fidup) for more information
- Open an issue if you need help or have questions

Thank you for helping make open-fidup better! 🎓