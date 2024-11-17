export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  discount: number;
}

export interface CartSummary {
  itemCount: number;
  subtotal: number;
  discount: number;
  total: number;
}
