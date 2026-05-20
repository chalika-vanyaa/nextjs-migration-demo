import React from 'react';
import OrderCard from '../../components/OrderCard';
import styles from '../../styles/Orders.module.css';
import { Order } from '../../types';

async function getOrders(): Promise<Order[]> {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${apiBaseUrl}/api/orders`, { cache: 'no-store' });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch orders');
  }
  return res.json();
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <h1>Your Orders</h1>
        <p>Here is a list of your past orders.</p>
      </div>
      <div className={styles.orderList}>
        {orders.map((order) => (
          <OrderCard key={order.orderId} order={order} />
        ))}
      </div>
    </div>
  );
}
