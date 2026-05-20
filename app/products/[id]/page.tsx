import React from 'react';
import styles from '../../../styles/ProductDetail.module.css';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../lib/data';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    // This will render the closest `not-found.js` file
    notFound();
  }

  return (
    <div className="container">
      <div className={styles.productDetail}>
        <div className={styles.imagePlaceholder} />
        <div className={styles.details}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
