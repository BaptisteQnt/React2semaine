export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export const products: Product[] = [
  {
    description: "A collection of nav",
    id: 1,
    name: "React Router",
    price: 8,
  },
  {
    description: "A libray that help you",
    id: 2,
    name: "React Redux",
    price: 12,
  },
  {
    description: "A libray that helps you",
    id: 3,
    name: "React Hook Form",
    price: 10,
  },
  {
    description: "A libray that helps you",
    id: 4,
    name: "React Appollo",
    price: 10,
  },
  {
    description: "A libray that provide",
    id: 5,
    name: "Tailwind CSS",
    price: 7,
  },
];
