import fetch from 'isomorphic-unfetch';
import React from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/ProductDetail.module.css';

const ProductDetailPage = ({ product }) => {
  if (!product || product.message) {
    return (
      <Layout>
        <h1>Product not found</h1>
        <p>Sorry, we couldn't find the product you're looking for.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.productDetail}>
        <div className={styles.imagePlaceholder} />
        <div className={styles.details}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </Layout>
  );
};

ProductDetailPage.getInitialProps = async ({ query }) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${apiBaseUrl}/api/products/${query.id}`);
  const product = await res.json();
  return { product };
};

export default ProductDetailPage;
