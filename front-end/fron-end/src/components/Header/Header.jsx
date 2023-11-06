import "./Header.scss";

import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

import { useEffect, useState } from "react";

import Search from "./Search/Search"
import Cart from "../Cart/Cart";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showcart, setShowCart] = useState(false);
  const [ShowSearch, setShowSearch] = useState(false);
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
            <li>Home</li>
            <li>About</li>
            <li>Category</li>
          </ul>
          <div className="center">Muzammal</div>
          <div className="right">
            <TbSearch onClick={()=> setShowSearch(true)}/>
            <AiOutlineHeart />
            <span className="cart-icon" onClick={()=> setShowCart(true)}>
              <BsCartPlus />
              <span>5</span>
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
