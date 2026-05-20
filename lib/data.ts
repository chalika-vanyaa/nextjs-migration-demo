import fs from 'fs';
import path from 'path';
import { Product, Order } from '../types';

const dataDirectory = path.join(process.cwd(), 'public/data');

export function getAllProducts(): Product[] {
  const filePath = path.join(dataDirectory, 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export function getProductById(id: string): Product | undefined {
  const products = getAllProducts();
  return products.find((p) => p.id === id);
}

export function getAllOrders(): Order[] {
  const filePath = path.join(dataDirectory, 'orders.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}
