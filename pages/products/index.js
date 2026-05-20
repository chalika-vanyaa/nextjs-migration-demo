import fetch from 'isomorphic-unfetch';
import React from 'react';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/Products.module.css';

const ProductsPage = ({ products }) => {
  return (
    <Layout>
      <div className={styles.pageHeader}>
        <h1>Our Collection</h1>
        <p>Browse our exclusive collection of hand-crafted products.</p>
      </div>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

ProductsPage.getInitialProps = async () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${apiBaseUrl}/api/products`);
  const products = await res.json();
  return { products };
};

export default ProductsPage;
