import "./Cart.scss";
import { MdClose } from "react-icons/md";
// import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart }) => {
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

        {/* <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className="return-cta">Return to shop</button>
        </div> */}

        <>
          <CartItem />{" "}
          <div className="cart-footer">
            <div className="subtotal">
                <span className="text">Subtotla:</span>
                <span className="text total">1000Rs</span>
            </div>
            <div className="button">
                <button className="checkout-cta">Check Out</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
