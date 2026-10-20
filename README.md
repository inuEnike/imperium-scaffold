# imperium-scaffold

A lightweight CLI tool for scaffolding backend module files in TypeScript projects.

`imperium-scaffold` helps you create a consistent module directory structure without manually creating each file.

## Features

- Generate backend module directories.
- Create five TypeScript files for each module.
- Provide a basic starter template for generated files.
- Run directly from the command line.

## Installation

Install globally using npm:

```bash
npm install -g imperium-scaffold
```

## Usage

From the root of your TypeScript project, run:

```bash
imperium Auth
```

Replace `Auth` with the name of the module you want to create.

The command creates the module inside `src/modules/`.

## Generated structure

For example, running `imperium Auth` creates:

```text
src/
└── modules/
    └── Auth/
        ├── auth.controller.ts
        ├── auth.models.ts
        ├── auth.types.ts
        ├── auth.routes.ts
        └── auth.repository.ts
```

## Requirements

- Node.js
- A TypeScript project

## Development

Clone the repository and install the development dependencies:

```bash
git clone https://github.com/inuEnike/imperium-scaffold
cd imperium-scaffold
bun install
```

Build the project:

```bash
bun run build
```

Run the CLI locally:

```bash
bun run dev Auth
```

## Important notes

- Run the command from your project root because generated modules are placed under `src/modules/`.
- Provide a module name when running the CLI.
- Avoid generating a module over existing files, as the current implementation may overwrite them.

## Contributing

Contributions, bug reports, and feature suggestions are welcome.

## License

Choose and add a license before distributing the project as open-source software.
