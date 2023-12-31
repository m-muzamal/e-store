import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utlis/context";
import Login from "./components/AdminSide/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/admin" element={<Login />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
