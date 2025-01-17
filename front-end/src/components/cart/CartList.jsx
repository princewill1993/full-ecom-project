import React from "react";
import CardItemCard from "./CardItemCard";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function CartList() {
  const { cartItems } = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-medium mb-10">
          Sorry, no item in cart yet.
        </h1>
        <Link
          className="text-gray text-xl underline-offset-[10px] hover:text-black text-gray-500 underline "
          to={"/products"}
        >
          {" "}
          Shop exclusively...
        </Link>
      </div>
    );
  }
  return (
    <section>
      {cartItems.map((item) => {
        return (
          <CardItemCard
            key={item.product_id}
            product_id={item.product_id}
            product_image={item.product_image}
            product_name={item.product_name}
            product_price={item.product_price}
            product_quantity={item.product_quantity}
          />
        );
      })}
    </section>
  );
}

export default CartList;
