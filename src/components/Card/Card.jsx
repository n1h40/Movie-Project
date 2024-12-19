import React from "react";

function Card({ movie, setList, basket }) {
  const handleAddToList = () => {
    setList((prev) => {
      const isAlreadyInList = prev.some((item) => item.id === movie.id);

      if (!isAlreadyInList && basket.length === 0) {
        return [...prev, movie];
      } else {
        alert("Movie is already in the list or basket is not empty");
        return prev;
      }
    });
  };

  return (
    <div className="movie-card">
      <img
        src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
        alt={movie.title || "Movie Poster"}
      />
      <div className="card-content">
        <div className="card-texts">
          <span>{movie.release_date.slice(0, 4)}</span>
          <p>{movie.title}</p>
        </div>
        <div className="card-buttons">
          <button onClick={handleAddToList}>Add to List</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
