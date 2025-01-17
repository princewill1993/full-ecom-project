import { Button } from "antd";
import React from "react";
import { Link } from "react-router";
import { formatCurrency } from "../../utils/helper";

function ProductCard({
  product_image,
  product_price,
  product_name,
  product_id,
}) {
  return (
    <div className="border p-1 rounded-md hover:shadow-2xl transition-all duration-500">
      <img
        className=" w-[500px] mx-auto"
        src={product_image}
        alt="Monalisa portrait"
      />
      <div className="p-4">
        <h1 className="font-bold text-lg mb-1">{product_name}</h1>
        <p>{formatCurrency(product_price)}</p>

        <Link to={`/products/${product_id}`}>
          <Button type="primary" size="large" block>
            View product{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
