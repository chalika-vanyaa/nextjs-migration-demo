import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllOrders } from '../../lib/data';
import { Order } from '../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Order[]>
) {
  const orders = getAllOrders();
  res.status(200).json(orders);
}
