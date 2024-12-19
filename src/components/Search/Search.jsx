import React, { useState } from "react";

function Search({ getData }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      getData(searchValue); 
      setSearchValue("");  
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Write name of the film..."
      />
      <button 
        onClick={handleSearch} 
        disabled={searchValue.trim() === ""}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
