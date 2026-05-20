import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'public/data');

export function getAllProducts() {
  const filePath = path.join(dataDirectory, 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export function getProductById(id) {
  const products = getAllProducts();
  return products.find((product) => product.id === id);
}

export function getAllOrders() {
  const filePath = path.join(dataDirectory, 'orders.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}
