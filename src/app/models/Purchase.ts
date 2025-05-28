import { Product } from "./Product";

export interface Purchase {
  // id: number;
  // productName: string;
  // productPrice: number;
  // quantity: number;
  // totalPrice: number;
  // purchaseDate: string;
  id: number;
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
  };
  quantity: number;
  totalPrice: number;
  purchaseDate: string;
  user?: {
    id: number;
    nickname: string;
  };
};
