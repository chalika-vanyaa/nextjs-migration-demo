import React from 'react';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/Products.module.css';
import { Product } from '../../types';

async function getProducts(): Promise<Product[]> {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${apiBaseUrl}/api/products`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <h1>Our Collection</h1>
        <p>Browse our exclusive collection of hand-crafted products.</p>
      </div>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
