export type Article = {
  id: string;
  name: string;
  amountInStock: number;
};

export type ProductArticle = {
  id: string;
  amountRequired: number;
};

export type Product = {
  id: string;
  name: string;
  articles: ProductArticle[];
};

export type CreateSale = {
  productId: string;
  amountSold: number;
};

export type PutArticle = {
  id: string;
  amountToSubtract?: number;
  amountInStock?: number;
};
