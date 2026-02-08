## Package Manager Preference

Always use **bun** instead of node, npm, yarn, or pnpm for all package management tasks.

- Install dependencies: `bun install`
- Add packages: `bun add <package>`
- Run scripts: `bun run <script>`
- Execute commands: `bunx <command>`

## Plan Mode

When operating in Plan Mode:

- Produce concise, execution-focused plans.
- Clarity is required; verbosity is not.
- Do not include explanations, prose, or filler.
- Output only concrete steps.
- Every plan **MUST** end with a section titled **“Unresolved Questions”**.
- Include only questions that materially block execution.
- If there are no blockers, explicitly write:

  **Unresolved Questions: None.**

Failure to follow this structure is not allowed.

## Code Style & Generation Rules

All generated code must follow these rules:

- Code must be self-explanatory.
- Do not use comments.
- Intent must be expressed through naming, structure, and composition only.

Strict consistency is required across:

- File structure
- Module boundaries
- Naming conventions
- Architectural patterns

Before writing any code:

- Explore the existing project.
- Understand the directory layout, conventions, abstractions, and dependency patterns.

When adding new code:

- Place it only in logically correct locations.
- Do not introduce new patterns unless strictly necessary.
