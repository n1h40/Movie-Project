import React from "react";
import { Link } from "react-router-dom";

function Basket({ basket, setBasketActive }) {
  return (
    <div className="basket">
      <div className="basket-container">
        <h1>Basket</h1>
        <div className="basket-rows">
          {basket.orders && basket.orders.length > 0 ? (
            <>
              <h1>List Name: {basket.title}</h1>
              <div className="basket-orders">
                {basket.orders.map((item, index) => (
                  <div key={index} className="basket-order">
                    <Link
                      target="_blank"
                      to={`https://www.themoviedb.org/movie/${item.id}`}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                        alt={item.title || "Movie Thumbnail"}
                      />
                    </Link>
                    <div>
                      <p>{item.title}</p>
                      <span>Year: {item.release_date.slice(0, 4)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="basket-empty">There are no items in the basket</div>
          )}
        </div>
        <button onClick={() => setBasketActive(false)}>Go Back</button>
      </div>
    </div>
  );
}

export default Basket;
