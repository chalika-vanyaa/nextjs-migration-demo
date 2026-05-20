import { getProductById } from '../../../lib/data';

export default (req, res) => {
  const {
    query: { id },
  } = req;

  const product = getProductById(id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: `Product with id: ${id} not found.` });
  }
};
