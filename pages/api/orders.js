import { getAllOrders } from '../../lib/data';

export default (req, res) => {
  const orders = getAllOrders();
  res.status(200).json(orders);
};
