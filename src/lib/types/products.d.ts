
declare type Category = {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
  

declare type Subcategory = {
    _id: string;
    name: string;
    slug: string;
    category: string;
};
  

declare  type Brand = {
    _id: string;
    name: string;
    slug: string;
    image: string;
};
  

declare  type Product = {
    sold: number;
    images: string[];
    subcategory: Subcategory[]; 
    ratingsQuantity: number;
    title: string;
    slug: string;
    description: string;
    quantity: number;
    price: number;
    imageCover: string; 
    category: Category; 
    brand: Brand; 
    ratingsAverage: number;
    id: string;
} & DatabaseProps;



type ApiMetadata = {
    currentPage: number; 
    numberOfPages: number;
    limit: number; 
    nextPage?: number; 
  };
  

  type ProductResponse = {
    results: number; 
    metadata: ApiMetadata;
    data?: Product[];
  };