import "./SingleProduct.scss";
import { FaCartPlus, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPinterestP } from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../../utlis/context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  
  let api = `https://fakestoreapi.com/products/${id}`
  const { handlAddToCart } = useContext(Context)

  const fetchProductData = useCallback(async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }, [setProduct]);

  useEffect(() => {
    fetchProductData(api);
  }, [api, fetchProductData]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const increment = ()=> {
    setQuantity((prevState) => prevState + 1) ;
  }

  const decrement = ()=> {
    setQuantity((prevState) => {
      if (prevState === 1) return 1
      return prevState -1
    });
  }

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={product.image} alt="img" />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">${product.price}</span>
            <span className="desc">{product.description}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>

              <button className="add-to-cart-button" onClick={() => {
                handlAddToCart(product, quantity)
                setQuantity(1);
              }}>
                <FaCartPlus size={20} />
                Add to cart
              </button>
            </div>

            <span className="devider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span className="text-bold">{product.category}</span>
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
        <RelatedProducts productId = {id} categoryId = {product.category} />
      </div>
    </div>
  );
};

export default SingleProduct;
