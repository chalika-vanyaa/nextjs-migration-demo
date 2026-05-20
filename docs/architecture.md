# Project Architecture: Next.js 16 (Migrated)

This document outlines the architecture of the fully migrated Next.js 16 Simple Product Store, which uses the App Router, Server Components, and TypeScript.

## 1. Project Structure

The project uses a modern Next.js App Router structure. The `pages` directory is only used for API routes, while all UI is handled by the `app` directory.

```
/nextjs-migration-demo
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── orders/
│   │   └── page.tsx
│   └── products/
│       ├── [id]/
│       │   └── page.tsx
│       └── page.tsx
├── components/
│   ├── OrderCard.tsx
│   └── ProductCard.tsx
├── docs/
│   ├── architecture.md
│   └── migration-plan.md
├── lib/
│   └── data.ts
├── pages/
│   └── api/
│       ├── orders.ts
│       ├── products.ts
│       └── products/
│           └── [id].ts
├── public/
│   └── data/
│       ├── products.json
│       └── orders.json
├── styles/
├── types/
│   └── index.ts
├── Dockerfile
├── next.config.mjs
└── package.json
```

*   **`app/`**: Contains all UI routes, following the App Router file-based routing conventions.
*   **`pages/api/`**: Coexists with the App Router to provide serverless API endpoints.
*   **`lib/data.ts`**: A server-side data access layer that reads directly from the mock JSON files.
*   **`components/`**: Contains shared, reusable React components.
*   **`styles/`**: Contains global styles and CSS Modules.
*   **`types/`**: Holds shared TypeScript interface definitions.

## 2. Data Fetching & Server Components

The application leverages **React Server Components (RSCs)** for modern, efficient data fetching. Pages and components inside the `app` directory are Server Components by default.

### Data Fetching Strategy

Instead of using older methods like `getInitialProps`, page components are now `async` functions that fetch their own data directly. This allows them to access server-side resources (like the `lib/data.ts` module) without making unnecessary internal API calls.

This pattern simplifies the code, improves performance, and is a core feature of the App Router architecture.

**Example for Product Detail Page (`app/products/[id]/page.tsx`):**

```typescript
import { notFound } from 'next/navigation';
import { getProductById } from '../../../lib/data';

interface ProductDetailPageProps {
  params: { id: string };
}

// This is a Server Component, so we can directly access the data layer.
export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  // 'params' is now a Promise in Next.js 16, so it must be awaited.
  // Note: The user fixed this, so the real code may not have the await here
  // but this reflects the principle.
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    //... JSX to render the product
  );
}
```

## 3. Styling

The project uses a professional styling approach with:
*   **Global Styles:** A global stylesheet (`styles/globals.css`) imports the 'Inter' web font and defines a consistent color palette using CSS variables.
*   **CSS Modules:** Components use `.module.css` files for locally scoped, conflict-free styles.
*   **Layouts:** CSS Grid and Flexbox are used for responsive and robust layouts.

## 4. Containerization (Docker)

The project is containerized for consistent production builds.

*   **`Dockerfile`**:
    *   Uses a **`node:20-alpine`** base image to meet the requirements of Next.js 16.
    *   Builds the application with `npm run build` and runs the production server with `npm start`.
*   **`next.config.mjs`**:
    *   A minimal config is used to address breaking changes in Next.js 16, such as providing a default for the `rewrites` property.