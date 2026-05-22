# Next.js 9 Simple Product Store

This is a demo application of a simple product store built with Next.js 9.

## Features

*   Next.js 9
*   Pages Router
*   JavaScript
*   CSS Modules
*   `getInitialProps` for data fetching
*   Mock JSON files as data source
*   Dockerized

## Pages

*   **/**: Home page
*   **/products**: Product list page
*   **/products/[id]**: Product detail page
*   **/orders**: Orders list page

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

1.  Build the Docker image:
    ```bash
    docker-compose up --build
    ```
2.  Run the Docker container:
    ```bash
    docker-compose up
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
