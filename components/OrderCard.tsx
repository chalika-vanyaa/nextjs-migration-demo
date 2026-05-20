import React, { FC } from 'react';
import styles from '../styles/OrderCard.module.css';
import { Order } from '../types';

interface OrderCardProps {
  order: Order;
}

const OrderCard: FC<OrderCardProps> = ({ order }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.orderId}>Order #{order.orderId}</h2>
        <p className={styles.orderDate}>
          {new Date(order.orderDate).toLocaleDateString()}
        </p>
      </div>
      <div className={styles.details}>
        <p>
          <strong>Product ID:</strong> {order.productId}
        </p>
        <p>
          <strong>Quantity:</strong> {order.quantity}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
