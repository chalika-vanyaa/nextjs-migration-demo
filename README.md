# Next.js 16 Simple Product Store (Migrated)

> **Migration Note**
> This repository documents a migration from Next.js 9 to Next.js 16.
> - The `main` branch contains the original legacy Next.js 9 project.
> - The `dev` branch contains the final, fully migrated Next.js 16 project using the App Router.

This is a demo application of a simple product store, showcasing a modern Next.js 16 architecture.

## Features

*   **Next.js 16** with **App Router**
*   **TypeScript**
*   **React Server Components** for data fetching
*   CSS Modules for styling
*   Mock JSON files as a data source
*   Dockerized for production

## Pages (App Router)

*   **`/`**: Home page
*   **`/products`**: Product list page
*   **`/products/[id]`**: Product detail page
*   **`/orders`**: Orders list page

## API Routes

*   **/api/products**: Returns a list of all products.
*   **/api/products/[id]**: Returns a single product.
*   **/api/orders**: Returns a list of all orders.

## How to Run

### Locally

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### With Docker

1.  Build and run the container:
    ```bash
    docker-compose up --build
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
