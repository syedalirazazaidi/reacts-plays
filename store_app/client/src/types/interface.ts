export interface ProductTypeData {
  data?: ProductsEntity;
}
export interface ProductsType {
  name: any;
  data?: ProductsEntity[];
  nbHits?: number;
}
export interface ProductsEntity {
  _id: string;
  name: string;
  price: number;
  featured: boolean;
  rating: number;
  image?: string | null;
  createdAt: string;
  company: string;
  __v: number;
}
