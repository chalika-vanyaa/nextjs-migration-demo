# Next.js Migration Plan: v9 to v16

This document outlines a comprehensive, phased plan to migrate the project from Next.js 9 to Next.js 16.2.6, embracing modern features like the App Router, Server Components, TypeScript, and the Turbopack compiler.

## Migration Goals

-   **Framework:** Next.js 9 → Next.js 16.2.6
-   **Compiler:** Webpack → Turbopack (default)
-   **Routing:** Pages Router → App Router
-   **Data Fetching:** `getInitialProps` → Async Server Components
-   **Language:** JavaScript → TypeScript

## Leveraging Agent Skills

This migration will utilize our full suite of installed agent skills to ensure a high-quality and efficient process:
-   **`nextjs-best-practices`:** Will guide the entire migration, from using the correct codemods to structuring the App Router and implementing modern data fetching.
-   **`typescript-expert`:** Will lead the conversion to TypeScript, ensuring all new code is strongly typed.
-   **`systematic-debugging`:** Will be our first responder for diagnosing and fixing any build errors or runtime issues that arise.
-   **`test-driven-development`:** Will be used to write tests for new and refactored logic.
-   **`nodejs-best-practices`:** Will provide guidance for any complex server-side logic.

---

### Phase 1: Upgrade to Next.js 16.2.6

**Goal:** Get the project running on Next.js 16.2.6 with the existing Pages Router, addressing the breaking changes outlined in the official documentation.

**Steps:**

1.  **Update Dependencies:**
    *   In `package.json`, update dependencies to `"next": "16.2.6"`, `"react": "latest"`, and `"react-dom": "latest"`.
    *   Run `npm install`.

2.  **Run Upgrade Codemod:**
    *   Execute the official `upgrade` codemod to handle many breaking changes automatically.
    *   Command: `npx @next/codemod@canary upgrade latest`
    *   **Applicable Skill:** The `nextjs-best-practices` skill will manage this process.

3.  **Address Breaking Changes Manually:**
    *   **Turbopack:** Confirm `package.json` scripts do not contain the legacy `--turbopack` flag, as it is now the default compiler.
    *   **`next lint`:** The `next lint` command is removed. We will ensure this is not referenced in our scripts.
    *   **Runtime Config:** `serverRuntimeConfig` and `publicRuntimeConfig` are removed. We will verify they are not used and rely on standard Environment Variables.
    *   **`fs` Module Resolution:** If the `Can't resolve 'fs'` error appears, we will implement the new `turbopack.resolveAlias` fix in `next.config.js` as specified in the documentation.

4.  **Test and Validate:**
    *   Run `npm run dev` and `npm run build` to ensure the application builds and runs correctly.
    *   **Applicable Skill:** `systematic-debugging` will be used to diagnose any issues related to the breaking changes.

**Outcome:** The project will be running on Next.js 16.2.6, using the Turbopack compiler, but still on the Pages Router.

---

### Phase 2: Introduce TypeScript

**Goal:** Convert the project to TypeScript, fulfilling the minimum requirement of TypeScript 5.1+ for Next.js 16.

**Steps:**

1.  **Setup TypeScript:**
    *   Create `tsconfig.json`. Next.js will auto-install dependencies and populate the file.
2.  **Rename Files:** Incrementally rename `.js` files to `.tsx` and `.ts`.
3.  **Add Types:**
    *   Add types for props, API routes, and data models.
    *   **Applicable Skill:** The `typescript-expert` skill will lead this effort.
4.  **Test and Validate:** Continuously run `npm run build` to catch type errors.

**Outcome:** The project will be fully converted to TypeScript.

---

### Phase 3: Incremental App Router Adoption

**Goal:** Gradually move routes from the Pages Router to the new App Router.

**Steps:**

1.  **Create `app` directory.**
2.  **Migrate Layout:** Create `app/layout.tsx`, moving logic from `components/Layout.tsx`.
3.  **Migrate Pages:** Incrementally move pages to the new `app/folder/page.tsx` structure.
4.  **Check for `middleware` -> `proxy`:** The Next.js 16 docs note that `middleware.ts` is renamed to `proxy.ts`. While we don't have middleware, this is a key change to be aware of for future work.
5.  **Applicable Skills:** `nextjs-best-practices` and `systematic-debugging`.

**Outcome:** All routes will be handled by the `app` directory.

---

### Phase 4: Refactor to Server Components

**Goal:** Refactor data fetching to use `async` Server Components.

**Steps:**

1.  **Convert to `async` Components:** Refactor page components in the `app` directory to be `async`.
2.  **Refactor Data Fetching:** Move `fetch` logic from `getInitialProps` into the `async` components.
3.  **Handle Async APIs:** Update usage of `cookies`, `headers`, etc., to use the new `async` API pattern, as synchronous access is removed in Next.js 16.
4.  **Remove Dependencies:** Remove `isomorphic-unfetch`.
5.  **Applicable Skills:** `nextjs-best-practices`, `test-driven-development`.

**Outcome:** The application will be fully modernized on the App Router, using `async` Server Components for data fetching.
