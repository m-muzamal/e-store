import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams("");
  console.log(category);

  let api = `https://fakestoreapi.com/products/category/${category}`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [setProducts]);

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category title</div>
        <Products headingText={category} products={products} />
      </div>
    </div>
  );
};

export default Category;
