export interface CartItem {
  cartId: number;
  userId: number;
  productId: number;
  quantity: number;
  price: number;
  productImage: string;
  productName: string;
  createdAt: string; // ISO date string format
  updatedAt: string; // ISO date string format
}

export interface CartSummary {
  itemCount: number;
  subtotal: number;
  discount: number;
  total: number;
}
