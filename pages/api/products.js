import { getAllProducts } from '../../lib/data';

export default (req, res) => {
  const products = getAllProducts();
  res.status(200).json(products);
};
