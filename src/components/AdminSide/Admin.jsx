import React, { useState } from "react";
import "./admin.scss";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [about, setAbout] = useState("");
  const [category, setCategory] = useState("Men's Clothing");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(price);
    console.log(about);
    console.log(category);
    console.log(image);
  };
  return (
    <div className="container">
      <form className="content" onSubmit={handleSubmit}>
        <div className="items">
          <p className="lable">Product Name</p>
          <input
            className="input"
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="lable">Product Price</p>
          <input
            className="input"
            type="text"
            placeholder="Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p className="lable">Product Discription</p>
          <textarea
            required
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
          <div className="input-items">
            <div className="inputs">
              <p className="lablee">ProductCategory:</p>
              <select
                id="options"
                name="options"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Men's Clothing">Men's Clothing</option>
                <option value="Women's Clothing">Women's Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Jewlerey">Jewlerey</option>
              </select>
            </div>
            <div className="inputs">
              <p className="lablee">ProductImage:</p>
              <input
                type="file"
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admin;
