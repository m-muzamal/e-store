import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ products }) => {
  const uniqueCategories = [...new Set(products.map((item) => item.category))];
  const navigate = useNavigate()

  return (
    <div id="category" className="shop-by-category">
      <h1 className="sec-heading">Categories</h1>
      <div className="categories">
        {uniqueCategories.map((category, index) => {
          const firstProductWithCategory = products.find(
            (item) => item.category === category
          );
          return (
            <div key={index} className="category" onClick={() => navigate("/category/" + category)}>
              <div className="category-content">
                <img src={firstProductWithCategory.image} alt="img" />
              </div>
              <span className="name">{category}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
