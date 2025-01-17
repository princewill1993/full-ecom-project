import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="shadow-md sticky top-0 z-[10] bg-white">
      <section className="container mx-auto flex justify-between items-center p-4">
        <NavLink to={"/"}>
          <h1 className="font-semibold tracking-wide text-2xl">LG-SHOES</h1>
        </NavLink>
        <div className="flex gap-4 text-gray-500 font-medium">
          <NavLink
            className={
              "hover:text-black transition-colors duration-500 text-lg"
            }
            to={"/products"}
          >
            Marketplace
          </NavLink>
          <NavLink
            className={
              "hover:text-black transition-colors duration-500 relative"
            }
            to={"/cart"}
          >
            {<ShoppingCart strokeWidth={2.5} />}
            <p className="bg-red-500 text-white rounded-lg text-center absolute -top-4 right-1 px-1 text-xs">
              {cartItems.length}
            </p>
          </NavLink>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
