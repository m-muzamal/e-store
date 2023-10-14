import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utlis/context";

const Cart = ({ setShowCart }) => {
  const {cartItems, cartsubTotoal} = useContext(Context);
  return (
    <div className="cart-penal">
      <div className="opec-layer"></div>
      <div className="cart-content">
        <div className="cart-header"> 
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <spna className="text">Close</spna>
          </span>
        </div>

        {!cartItems?.length && <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className="return-cta" onClick={() => setShowCart(false)}>Return to shop</button>
        </div>}

        {!!cartItems?.length && <>
          <CartItem />{" "}
          <div className="cart-footer">
            <div className="subtotal">
                <span className="text">Subtotla:</span>
                <span className="text total">${cartsubTotoal}</span>
            </div>
            <div className="button">
                <button className="checkout-cta">Check Out</button>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
};

export default Cart;
