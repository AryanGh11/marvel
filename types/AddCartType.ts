export type AddCartType = {
  name: string;
  image: string | null;
  quantity?: number | 1;
  id: string;
  description: string | null;
  finalPrice: number;
};