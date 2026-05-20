import fetch from 'isomorphic-unfetch';
import React from 'react';
import Layout from '../../components/Layout';
import OrderCard from '../../components/OrderCard';
import styles from '../../styles/Orders.module.css';

const OrdersPage = ({ orders }) => {
  return (
    <Layout>
      <div className={styles.pageHeader}>
        <h1>Your Orders</h1>
        <p>Here is a list of your past orders.</p>
      </div>
      <div className={styles.orderList}>
        {orders.map((order) => (
          <OrderCard key={order.orderId} order={order} />
        ))}
      </div>
    </Layout>
  );
};

OrdersPage.getInitialProps = async () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${apiBaseUrl}/api/orders`);
  const orders = await res.json();
  return { orders };
};

export default OrdersPage;
