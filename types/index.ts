export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Order {
  orderId: string;
  productId: string;
  quantity: number;
  orderDate: string;
}
