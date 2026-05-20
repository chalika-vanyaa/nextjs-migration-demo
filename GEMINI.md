# Project Overview: Next.js 9 Simple Product Store

This project is a professionally styled, demo-purpose product store built with Next.js 9. It demonstrates a classic server-rendered React application structure, a full-featured agent-based development environment, and a production-ready Docker setup.

**Key Technologies & Concepts:**

*   **Framework:** Next.js 9
*   **Language:** JavaScript (ES6+)
*   **Routing:** Pages Router (`pages/`)
*   **Data Fetching:** `getInitialProps` using `isomorphic-unfetch` to call internal API routes.
*   **API:** Serverless API routes under `pages/api/`.
*   **Data Source:** Mock JSON files in `public/data/`, accessed via a server-side data layer in `lib/data.js`.
*   **Styling:** A professional design using the 'Inter' web font, a defined color palette (via CSS variables), and CSS Modules with advanced layouts (CSS Grid).
*   **Containerization:** Docker and Docker Compose are configured for consistent, production-oriented builds.

## Building and Running

### Local Development

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

### Docker (Production Mode)

1.  **Build and run the container**:
    ```bash
    docker-compose up --build
    ```
    The application will be available at `http://localhost:3000`.

## Development Conventions

*   **Styling:** Follow the established professional design system. Use the 'Inter' font, the CSS variables defined in `styles/globals.css` for colors, and create responsive, component-scoped styles using CSS Modules.
*   **Data Fetching:** Pages use `getInitialProps` to call the internal API routes. This pattern is used to decouple page rendering from server-side modules like `fs`.
*   **Components:** Components are designed to be visually appealing and reusable. For example, `ProductCard` includes an image placeholder and a clear call-to-action button.
*   **Documentation:** Project architecture and planning documents are kept in the `docs/` directory.

## Agent Configuration (`.gemini/`)

This project is configured for advanced, agent-driven development using the Gemini CLI.

### Agent Skills Setup

To set up the recommended development skills for this project, run the setup script from the project root:

```bash
./setup.sh
```
This will install several skills (e.g., `nextjs-best-practices`, `typescript-expert`, `systematic-debugging`) into the `.gemini/skills/` directory. This directory is ignored by Git and Docker.

### Policies

The `.gemini/policies/` directory contains rules that govern the agent's behavior:
*   `ask-git.toml` & `ask-remove.toml`: Enforce user confirmation before running `git` or `rm` commands.
*   `block-env-files.toml`: Prevents the agent from reading or writing to `.env` files for security.

### Real-time Syntax Checking

The project uses a Gemini hook (`.gemini/hooks/format-frontend.sh`) that runs `node --check` on any JavaScript file the agent modifies. This provides immediate feedback and prevents basic syntax errors, ensuring the codebase remains healthy during development.
