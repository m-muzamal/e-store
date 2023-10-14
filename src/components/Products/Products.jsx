import "./Products.scss";
import Product from "./Product/Product";

const Products = ({headingText, products }) => {
  if (!products) {
    return <div>Loading...</div>; 
  }
  
  return (
    <div className="products-container">
      <div className="sec-heading">{headingText}</div>
      <div className="products">
        {products.map((api, index) => (
          <Product
            key={index}
            id={api.id}
            name={api.title}
            img={api.image}
            price={api.price}
            category={api.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
