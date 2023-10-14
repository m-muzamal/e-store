import Products from "../../Products/Products";
import { useCallback, useEffect, useState } from "react";

const RelatedProducts = ({productId, categoryId}) => {
  const [product, setProduct] = useState(null);
  let api = `https://fakestoreapi.com/products/category/${categoryId}?limit=4`

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

  return (
    <div className="related-product">
      <Products headingText = "Related Products" products={product}/>
    </div>
  );
};

export default RelatedProducts;
