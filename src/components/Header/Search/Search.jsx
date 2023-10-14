import "./Search.scss";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const api = "https://fakestoreapi.com/products";

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        const filteredResults = data.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [query, api]);

  return (
    <div className="search-model">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for product"
          value={query}
          onChange={onChange}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {searchResults?.map((result) => (
            <div
              key={result.id}
              className="search-reasult-item"
              onClick={() => {
                navigate("/product/" + result.id);
                setShowSearch(false);
              }}
            >
              <div className="img-container">
                <img src={result.image} alt="" />
              </div>
              <div className="prod-details">
                <span className="name">{result.title}</span>
                <span className="desc">{result.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
