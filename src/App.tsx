import { Route, Routes } from "react-router";
import MainLayout from "./components/MainLayout/MainLayout";
import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import History from "./pages/History/History";
import Coupons from "./pages/Coupons/Coupons";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="shop" element={<Shop />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="history" element={<History />} />
          <Route path="coupons" element={<Coupons />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
