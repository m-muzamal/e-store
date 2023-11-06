import "./Products.scss";
import Product from "./Product/Product";
import prod1 from "../../assets/products/earbuds-prod-1.webp";
import prod2 from "../../assets/products/earbuds-prod-2.webp";
import prod3 from "../../assets/products/earbuds-prod-3.webp";
import prod4 from "../../assets/products/earbuds-prod-4.webp";
import prod5 from "../../assets/products/earbuds-prod-5.webp";
import prod6 from "../../assets/products/headphone-prod-1.webp";
import prod7 from "../../assets/products/headphone-prod-2.webp";
import prod8 from "../../assets/products/headphone-prod-3.webp";
import prod9 from "../../assets/products/headphone-prod-4.webp";
import prod10 from "../../assets/products/headphone-prod-5.webp";
import prod11 from "../../assets/products/speaker-prod-1.webp";
import prod12 from "../../assets/products/speaker-prod-2.webp";
import prod13 from "../../assets/products/speaker-prod-3.webp";
import prod14 from "../../assets/products/speaker-prod-4.webp";
import prod15 from "../../assets/products/speaker-prod-5.webp";
import prod16 from "../../assets/products/watch-prod-1.webp";
import prod17 from "../../assets/products/watch-prod-2.webp";
import prod18 from "../../assets/products/watch-prod-3.webp";

const Products = ({ innerPage, headingText }) => {
  const productData = [
    { id: 1, image: prod1 },
    { id: 2, image: prod2 },
    { id: 3, image: prod3 },
    { id: 4, image: prod4 },
    { id: 5, image: prod5 },
    { id: 6, image: prod6 },
    { id: 7, image: prod7 },
    { id: 8, image: prod8 },
    { id: 9, image: prod9 },
    { id: 10, image: prod10 },
    { id: 11, image: prod11 },
    { id: 12, image: prod12 },
    { id: 13, image: prod13 },
    { id: 14, image: prod14 },
    { id: 15, image: prod15 },
    { id: 16, image: prod16 },
    { id: 17, image: prod17 },
    { id: 18, image: prod18 },
  ];
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}

      <div className="products">
        {productData.map((product, index) => (
          <Product key={index} img={product.image} />
        ))}
      </div>
    </div>
  );
};

export default Products;
