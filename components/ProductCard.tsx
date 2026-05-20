import React, { FC } from 'react';
import Link from 'next/link';
import styles from '../styles/ProductCard.module.css';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <a className={styles.card}>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.footer}>
            <p className={styles.price}>${product.price}</p>
            <div className={styles.button}>View Details</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
