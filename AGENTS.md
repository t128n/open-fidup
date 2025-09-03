# AGENTS.md - Development Guidelines for open-fidup

## Build/Lint/Test Commands

### Build Commands
- `bun run build` - Build production site to `./dist/`
- `bun run dev` - Start development server at `localhost:4321`
- `bun run preview` - Preview production build locally

### Type Checking
- `bunx astro check` - Type check Astro components and content
- `bunx tsc --noEmit` - TypeScript type checking only

### Package Management
- `bun install` - Install dependencies
- `bun add <package>` - Add new dependency
- `bun remove <package>` - Remove dependency

**Note:** No dedicated linting or testing framework is currently configured.

## Code Style Guidelines

### TypeScript Configuration
- Uses `astro/tsconfigs/strict` configuration
- Strict type checking enabled
- All files included except `dist/` directory

### Import Style
- Use ES6 imports with named imports when possible
- Group imports: external libraries first, then internal modules
- Example:
```typescript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { docsLoader } from '@astrojs/starlight/loaders';
```

### Naming Conventions
- **Files**: kebab-case for content files (e.g., `data-mining.md`)
- **Components**: PascalCase for Astro components
- **Variables/Functions**: camelCase
- **Types/Interfaces**: PascalCase
- **Constants**: UPPER_SNAKE_CASE

### TypeScript Best Practices
- Use strict typing - avoid `any` type
- Define interfaces for complex objects
- Use union types for related variants
- Leverage Astro's built-in TypeScript support

### Error Handling
- Use try-catch blocks for async operations
- Provide meaningful error messages
- Handle loading states appropriately in components

### Content Guidelines
- Write content in German (primary audience language)
- Use clear, concise language suitable for educational content
- Follow existing Markdown structure patterns
- Include practical examples where relevant
- Cite sources when referencing external materials

### File Organization
- Content files: `src/content/docs/lerninhalte/`
- Configuration: Root level (astro.config.mjs, tsconfig.json)
- Styles: `src/styles/global.css`
- Assets: `src/assets/` with subdirectories for organization

### Commit Message Style
- Use imperative mood (e.g., "Add feature" not "Added feature")
- Keep first line under 50 characters
- Use body for detailed explanations when needed

### Development Workflow
1. Run `bun run dev` for local development
2. Test changes in browser at `localhost:4321`
3. Run `bun run build` to verify production build
4. Use `bunx astro check` for type validation before committing