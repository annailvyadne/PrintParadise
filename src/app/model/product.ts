export class Product {
    id: number =0;
    name: string = '';
    description: string = '';
    categoryName: string = ''   ;     
    imageFile: string = '';
    price: string = '';
}

export interface ProductCategory {
  categoryName: string;
  products: Product[];
}