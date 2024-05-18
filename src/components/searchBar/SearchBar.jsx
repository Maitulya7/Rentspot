import { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" placeholder="City Loacation" name="location" />
        <input
          type="number"
          placeholder="Min Price"
          min={0}
          max={10000000}
          name="minPrice"
        />
        <input
          type="text"
          placeholder="Max Price"
          min={0}
          max={10000000}
          name="maxPrice"
        />
        <button>
          <img src="/search.png" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
