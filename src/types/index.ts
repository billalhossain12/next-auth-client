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

export type TUser = {
  _id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  mobileNumber: string;
  profilePhoto: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};
