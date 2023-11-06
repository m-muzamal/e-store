import React, { useEffect, useState } from "react";
import "./admin.scss";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [about, setAbout] = useState("");
  const [category, setCategory] = useState("men's clothing");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: name,
        price: price,
        description: about,
        image: image,
        category: category,
      }),
    })
      .then((res) => {
        alert("Product added successfully!");
        setName("");
        setPrice("");
        setAbout("");
        setImage("");
        setCategory("");
        return res.json();
      })
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
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
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
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
