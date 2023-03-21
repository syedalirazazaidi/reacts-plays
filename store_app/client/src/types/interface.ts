export interface ProductTypeData {
  data?: ProductsEntity;
}
export interface ProductsType {
  sort(arg0: (a: any, b: any) => 1 | -1): any;
  name: any;
  data?: ProductsEntity[];
  nbHits?: number;
}
export interface SortType {
  sort: ProductsEntity[];
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
