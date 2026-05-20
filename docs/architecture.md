# Project Architecture: Next.js 9 Simple Product Store

This document outlines the architecture and key components of the Next.js 9 Simple Product Store, a demo application designed to showcase basic e-commerce functionality using specific Next.js features and development practices.

## 1. Project Structure

The project follows a standard Next.js directory structure with additional folders for shared logic, documentation, mock data, and Docker configuration.

```
/nextjs-migration-demo
├── .env.example
├── README.md
├── package.json
├── pages/
│   ├── api/
│   │   ├── products/
│   │   │   └── [id].js
│   │   ├── products.js
│   │   └── orders.js
│   ├── _app.js
│   ├── index.js             // Home page
│   ├── products/
│   │   ├── index.js         // Product list page
│   │   └── [id].js          // Product detail page
│   └── orders/
│       └── index.js         // Orders list page
├── public/
│   └── data/
│       ├── products.json
│       └── orders.json
├── styles/
│   ├── Home.module.css
│   ├── Products.module.css
│   └── globals.css
├── components/
│   ├── Layout.js
│   ├── ProductCard.js
│   └── OrderCard.js
├── lib/
│   └── data.js              // Shared data access logic
├── docs/
│   └── architecture.md
├── Dockerfile
└── docker-compose.yml
```

*   **`pages/api/`**: Houses serverless functions for API endpoints, following Next.js file-based routing conventions (e.g., `pages/api/products/[id].js` for single product).
*   **`public/data/`**: Stores static mock JSON files that act as the data source.
*   **`styles/`**: Contains CSS Module files for component-scoped styling and `globals.css` for application-wide styles.
*   **`components/`**: Reusable React components.
*   **`lib/`**: Contains shared modules and utility functions, such as data access logic, to be used across pages and API routes.
*   **`docs/`**: Directory for project documentation.
*   **`Dockerfile` / `docker-compose.yml`**: Configuration for containerization.

## 2. Data Models and Mock Data

The application uses simple JSON files from `public/data/` as its data source.

### 2.1. Product Data Model (`public/data/products.json`)

Each product object is structured as follows:

```json
[
  {
    "id": "string",
    "name": "string",
    "price": "number",
    "description": "string"
  }
]
```

### 2.2. Order Data Model (`public/data/orders.json`)

Each order object is structured as follows:

```json
[
  {
    "orderId": "string",
    "productId": "string",
    "quantity": "number",
    "orderDate": "ISO 8601 string"
  }
]
```

## 3. API Endpoints (`pages/api/`)

All API endpoints are read-only and serve data from the mock JSON files, using shared data access logic from `lib/data.js`.

### 3.1. Products API

*   **`GET /api/products`**:
    *   **Description**: Retrieves a list of all products.
    *   **Response**: An array of product objects.
    *   **Implementation**: `pages/api/products.js`, which calls `lib/data.js`.
*   **`GET /api/products/[id]`**:
    *   **Description**: Retrieves a single product by its `id`.
    *   **Parameters**: `id` (string) - The unique identifier of the product.
    *   **Response**: 
        *   `200 OK`: A single product object.
        *   `404 Not Found`: If the product with the given `id` does not exist.
    *   **Implementation**: `pages/api/products/[id].js`, which calls `lib/data.js`.

### 3.2. Orders API

*   **`GET /api/orders`**:
    *   **Description**: Retrieves a list of all orders.
    *   **Response**: An array of order objects.
    *   **Implementation**: `pages/api/orders.js`, which calls `lib/data.js`.

## 4. Pages Implementation and Data Fetching

The application leverages Next.js's Pages Router and its data fetching methods.

### 4.1. Data Fetching Strategy

The application uses a robust data fetching strategy. For initial page loads, `getInitialProps` is used to fetch data from the application's own API routes (e.g., `/api/products`). This decouples the page rendering from the data access layer, ensuring that server-side logic (like `fs`) is never bundled in the client-side code, which prevents build errors.

**Example for Product List Page (`pages/products/index.js`):**

```javascript
import fetch from 'isomorphic-unfetch';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/Products.module.css';

function ProductsPage({ products }) {
  // Render logic...
}

ProductsPage.getInitialProps = async (ctx) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${apiBaseUrl}/api/products`);
  const products = await res.json();
  return { products };
};

export default ProductsPage;
```

### 4.2. Specific Page Responsibilities

*   **Home Page (`pages/index.js`)**: Serves as the entry point with a large "hero" section containing a title, subtitle, and a strong call-to-action button linking to the product collection.
*   **Product List Page (`pages/products/index.js`)**: Features a clean headline and displays all products in a responsive grid. It fetches all products and renders them using `ProductCard` components.
*   **Product Detail Page (`pages/products/[id].js`)**: Implements a two-column layout, with a product image placeholder on one side and the product's title, description, price, and an "Add to Cart" button on the other. It fetches a specific product by its ID.
*   **Orders List Page (`pages/orders/index.js`)**: Displays a clean, centered list of all past orders using the redesigned `OrderCard` components.

## 5. Styling

The project uses a professional and modern styling approach, designed to be clean, responsive, and visually appealing.

*   **Global Styles & Typography**: The global stylesheet (`styles/globals.css`) imports the 'Inter' web font from Google Fonts and defines a sophisticated color palette using CSS variables in `:root`. This ensures a consistent and premium look and feel across the entire application.
*   **CSS Modules**: Page-specific or component-specific styles are managed in `.module.css` files. This modular approach ensures styles are scoped and do not conflict.
*   **Layouts**: Advanced layout techniques, such as CSS Grid for the product list, are used to ensure perfect alignment and responsiveness.
*   **Component Design**: Components like `ProductCard` are designed to look like real-world e-commerce components, featuring image placeholders, clear typography, and interactive hover effects.

## 6. Environment Variables

Environment variables are managed through `.env.local` (local overrides) and `.env.example` (template).

*   **`NEXT_PUBLIC_API_BASE_URL`**: Specifies the base URL for API calls.
    *   Example: `NEXT_PUBLIC_API_BASE_URL=http://localhost:3000`
*   **`COMPOSE_PROJECT_NAME`**: An optional variable in the `.env` file to give the Docker project a unique name, preventing conflicts with other projects.

## 7. Containerization (Docker)

The project includes Docker support for consistent production-like environments.

*   **`Dockerfile`**:
    *   Uses a `node:16-alpine` base image.
    *   Follows best practices to copy dependencies, install them, and then copy application code to leverage Docker layer caching.
    *   Builds the application with `npm run build` and runs the production server with `npm start`.
*   **`docker-compose.yml`**:
    *   Defines the `nextjs-app` service.
    *   Builds the Docker image from the `Dockerfile`.
    *   Maps container port `3000` to host port `3000`. The configuration is optimized for running the pre-built application contained within the image.

This comprehensive design covers all aspects of the Next.js 9 Simple Product Store as discussed and approved.