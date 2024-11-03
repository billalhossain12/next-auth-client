export interface TProduct {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imgUrl: string;
  rating: number;
  stock: number;
  __v: number;
}

export interface TCategory {
  _id: string;
  name: string;
  imgUrl: string;
}
