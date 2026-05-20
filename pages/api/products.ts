import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllProducts } from '../../lib/data';
import { Product } from '../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const products = getAllProducts();
  res.status(200).json(products);
}
