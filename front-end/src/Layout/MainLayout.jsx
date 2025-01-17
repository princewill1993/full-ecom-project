import { Outlet } from "react-router";
import Navbar from "../components/ui/Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
