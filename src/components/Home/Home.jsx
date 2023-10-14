import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext, useCallback } from "react";
import { Context } from "../../utlis/context";


const Home = () => {
  const { products, setCategories } = useContext(Context);
  const { categories, setProducts } = useContext(Context);
  const productApi = "https://fakestoreapi.com/products";
  let api ="https://fakestoreapi.com/products/categories";

  const fetchApiData = useCallback(async(url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }, [setCategories])

  const fetchProductData = useCallback(async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }, [setProducts]);

  useEffect(() => {
    fetchApiData(api);
    fetchProductData(productApi);
  }, [productApi, fetchProductData, api, fetchApiData]);

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category category = {categories} products = {products} catogeries="Popular Products" />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
