import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utlis/context";

const CartItem = () => {
  const { cartItems, handlCartProductQuantity, handlRemoveFromCart } = useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map(item => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img src={item.image} alt="" />
          </div>
          <div className="prod-details">
            <span className="name">{item.title}</span>
            <MdClose className="clsoe-btn" onClick={() => handlRemoveFromCart(item)} />
            <div className="quantity-buttons">
              <span onClick={() => handlCartProductQuantity('dec', item)}>-</span>
              <span>{item.quantity}</span>
              <span onClick={() => handlCartProductQuantity('inc', item)}>+</span>
            </div>
            <div className="text">
              <span>{item.quantity}</span>
              <span>x</span>
              <span className="highlight">${item.price * item.quantity}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
