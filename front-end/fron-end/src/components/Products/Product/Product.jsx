import "./Product.scss";
import prod1 from "../../../assets/products/earbuds-prod-1.webp"

const Product = ({img}) => {
    return <div className="product-card">
        <div className="thumbnail" >
            <img src={img} alt="img" />
        </div>
        <div className="product-detail">
            <span className="name">Product Name</span>
            <span className="price">200Rs</span>
        </div>
    </div>;
};

export default Product;
