import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import Search from "./Search/Search"
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utlis/context";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showcart, setShowCart] = useState(false);
  const [ShowSearch, setShowSearch] = useState(false);
  const {cartCount} = useContext(Context);
  const navigate = useNavigate()

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Category</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>Muzammal</div>
          <div className="right">
            <TbSearch onClick={()=> setShowSearch(true)}/>
            <AiOutlineHeart />
            <span className="cart-icon" onClick={()=> setShowCart(true)}>
              <BsCartPlus />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showcart && <Cart setShowCart={setShowCart} />}
      {ShowSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
