import React from "react";
import { products } from "../data/products";
import { Link, useSearchParams } from "react-router-dom";

export function ProductsPage() {
  const [searchParams] = useSearchParams();
  function getFilterdedProduct() {
    const search = searchParams.get("search");
    if (search === null || search === "") {
      return products;
    } else {
      return products.filter(
        (product) =>
          product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
      );
    }
  }
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">
        Here are some great tools for React
      </h2>
      <ul>
        {getFilterdedProduct().map((product) => (
          <li key={product.id} className="p-1 text-base text-slate-800">
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
