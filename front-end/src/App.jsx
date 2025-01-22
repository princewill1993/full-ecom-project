import { Route, Routes } from "react-router";

import Cart from "./pages/Carts";
import MarketPlace from "./pages/MarketPlace";
import ProductDetails from "./pages/ProductDetails";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./pages/HomePage";
import Checkout from "./pages/Checkout";
import Admin from "./pages/protected/Admin";
import OrderDetails from "./pages/protected/OrderDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="products">
          <Route index element={<MarketPlace />} />
          <Route path=":product_id" element={<ProductDetails />} />
        </Route>

        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />

        <Route path="admin">
          <Route index element={<Admin />} />
          <Route path=":order_id" element={<OrderDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
