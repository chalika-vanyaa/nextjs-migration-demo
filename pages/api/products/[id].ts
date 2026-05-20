import type { NextApiRequest, NextApiResponse } from 'next';
import { getProductById } from '../../../lib/data';
import { Product } from '../../../types';

type ErrorResponse = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | ErrorResponse>
) {
  const { id } = req.query;

  // Type guard to ensure id is a string
  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid product ID.' });
  }

  const product = getProductById(id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: `Product with id: ${id} not found.` });
  }
}
