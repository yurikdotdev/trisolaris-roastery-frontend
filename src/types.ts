export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stockQuantity: number;
  createdAt: string;
  updatedAt: string;
  cartItems: string[];
};

export type CartItem = {
  id: string;
  price: number;
  quantity: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
};
