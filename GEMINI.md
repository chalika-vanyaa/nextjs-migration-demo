# Project Overview: Next.js 16 Simple Product Store

This repository contains a simple product store application that has been fully migrated from a legacy Next.js 9 architecture to a modern **Next.js 16.2.6** stack. It serves as a demonstration of current Next.js best practices.

> **Migration Note:** The `main` branch contains the original legacy Next.js 9 project. This `dev` branch contains the final, fully migrated Next.js 16 project.

**Key Technologies & Architecture:**

*   **Framework:** Next.js 16.2.6
*   **Language:** TypeScript
*   **Compiler:** Turbopack (default)
*   **Architecture:** App Router
*   **Data Fetching:** React Server Components (`async`/`await` in components)
*   **Styling:** CSS Modules with a defined global theme (`styles/globals.css`).
*   **Containerization:** Docker (`Dockerfile` + `docker-compose.yml`) running on Node.js 20.

## Building and Running

### Local Development

1.  **Install Dependencies**: `npm install`
2.  **Run the Dev Server**: `npm run dev`
    The application will be available at `http://localhost:3000`.

### Docker (Production Mode)

1.  **Build and Run**: `docker-compose up --build`
    The application will be available at `http://localhost:3000`.

## Development Conventions

### Data Fetching

The project uses a **Server-First** data fetching model. Pages and components in the `app` directory are Server Components by default and should access the data layer (e.g., `lib/data.ts`) *directly*. This is more performant and simpler than making internal `fetch` calls.

**Important:** For dynamic pages, the `params` prop is a `Promise`. You must `await` it before accessing its properties.

```typescript
// app/products/[id]/page.tsx
export default async function ProductDetailPage({ params }) {
  const { id } = await params; // Correctly awaiting params
  const product = await getProductById(id);
  // ...
}
```

### API Routes

Legacy API routes are still handled by the `pages/api/` directory. New server endpoints should be created as **Route Handlers** within the `app/api/` directory.

### Styling

Follow the established design system. Use the CSS variables in `styles/globals.css` for colors and `Layout.module.css` for page structure. New components should use their own `.module.css` file for locally scoped styles.

## Agent Configuration (`.gemini/`)

This project is configured for advanced, agent-driven development.

### Agent Skills Setup

To set up the recommended development skills for this project, run the setup script from the project root:

```bash
./setup.sh
```
This will install several skills (e.g., `nextjs-best-practices`, `typescript-expert`, `systematic-debugging`) into the `.gemini/skills/` directory. This directory is ignored by Docker.

### Policies

The `.gemini/policies/` directory contains rules that govern the agent's behavior:
*   `ask-git.toml` & `ask-remove.toml`: Enforce user confirmation before running `git` or `rm` commands.
*   `block-env-files.toml`: Prevents the agent from reading or writing to `.env` files for security.

### Real-time Syntax Checking

A Gemini hook is configured in `.gemini/settings.json` to run a syntax check (`node --check`) on any `.js` or `.ts` file the agent modifies in the `pages`, `components`, or `lib` directories, preventing basic syntax errors in real-time.
