import React from "react";
import ProductCard from "./ProductCard";
import { productData } from "../../constant/products";

function ProductList() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
      {productData.map((item) => {
        return (
          <ProductCard
            key={item.product_id}
            product_id={item.product_id}
            product_name={item.product_name}
            product_price={item.product_price}
            product_image={item.product_image}
          />
        );
      })}
    </section>
  );
}

export default ProductList;
