import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import List from "../List/List";
import Search from "../Search/Search";
import axios from "axios";

const API_HEADERS = {
  Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
  Accept: "application/json",
};

const BASE_URL = "https://api.themoviedb.org/3";

function Container({ setBasketActive, basket, setBasket }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useState("");
  const [movies, setMovies] = useState([]);
  const [list, setList] = useState([]);

  const fetchMovies = async (endpoint) => {
    try {
      const response = await axios.get(endpoint, { headers: API_HEADERS });
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = (searchQuery) => {
    setSearchParams(searchQuery);
    const endpoint = searchQuery
      ? `${BASE_URL}/search/movie?include_adult=false&language=en-US&query=${searchQuery}`
      : `${BASE_URL}/discover/movie`;
    fetchMovies(endpoint);
  };

  useEffect(() => {
    fetchMovies(`${BASE_URL}/discover/movie`);
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchParams.toLowerCase())
  );

  return (
    <div className="container">
      <div className="container-left">
        <Search
          getData={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="container-cards">
          {filteredMovies.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              basket={basket}
              list={list}
              setList={setList}
            />
          ))}
        </div>
      </div>
      <div className="container-right">
        <List
          basket={basket}
          setBasket={setBasket}
          setBasketActive={setBasketActive}
          list={list}
          setList={setList}
        />
      </div>
    </div>
  );
}

export default Container;
