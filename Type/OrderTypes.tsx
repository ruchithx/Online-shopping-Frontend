export interface Order {
  id: number;
  address: string;
  status: string;
  totalPrice: number;
  createdAt: string;
  orderItems: OrderItem[];
  userId: number;
}
export interface OrderItem {
  id: number;
  productId: number;
  quantity: number;
}
