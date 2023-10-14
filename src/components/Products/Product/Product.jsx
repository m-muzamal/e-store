import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, name, img, price }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)} >
      <div className="thumbnail">
        <img src={img} alt="img" />
      </div>
      <div className="product-detail">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default Product;
