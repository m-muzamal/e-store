import "./SingleProduct.scss";
import prod from "../../assets/products/earbuds-prod-1.webp";
import { FaCartPlus, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPinterestP } from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="img" />
          </div>
          <div className="right">
            <span className="name">Product name</span>
            <span className="price">price</span>
            <span className="desc">description</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>

              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                Add to cart
              </button>
            </div>

            <span className="devider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span className="text-bold">Headphones</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="Social icons">
                    <FaFacebookF size={16} />
                    <FaInstagram size={16} />
                    <FaLinkedinIn size={16} />
                    <FaTwitter size={16} />
                    <FaPinterestP size={16} />
                    
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
