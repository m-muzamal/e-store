import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0);
  const [cartsubTotoal, setcartsubTotoal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    let count = 0;
    cartItems.map((item) => (count += item.quantity));
    setcartCount(count);

    let subTotal = 0;
    cartItems.map((item) => (subTotal += item.price * item.quantity));
    setcartsubTotoal(subTotal);
  }, [cartItems]);

  const handlAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].quantity += quantity;
    } else {
      product.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };

  const handlRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

  const handlCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].quantity += 1;
    } else if (type === "dec") {
      if (items[index].quantity === 1) return;
      items[index].quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setcartCount,
        cartsubTotoal,
        setcartsubTotoal,
        handlAddToCart,
        handlRemoveFromCart,
        handlCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
