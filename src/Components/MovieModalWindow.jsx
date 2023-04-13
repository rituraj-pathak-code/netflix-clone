import React, { useState } from "react";
import "./MovieModalWindow.css";
import { useContext } from "react";
import { CartContext } from "../Context";

const MovieModalWindow = ({ movie, checkModal, closeModal }) => {
  const { cart, setCart } = useContext(CartContext);
  // const movieDetails = {
  //   title: title,
  //   description: description,
  //   poster: poster,
  // };

  const removeMovieHandler = (id) => {
    let reducedList = [...cart];
    const newReducedList = reducedList.filter((item) => {
      return item.id !== id;
    });
    setCart(newReducedList);
  };

  return (
    <div className="movie_modal__container">
      <div className="movie__modal">
        <button
          className="modal__closebtn"
          onClick={() => {
            closeModal(false);
            checkModal(false);
          }}
        >
          X
        </button>

        <div
          className="movie_modal__banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.poster}")`,
            backgroundPosition: "center",
            height: "300px",
          }}
        >
          <div className="modal__buttons">
            <button className="modal__button">Play</button>
            {cart.includes(movie) ? (
              <button
                className="modal__button"
                onClick={() => setCart(cart.filter((c) => c.id !== movie.id))}
              >
                Remove from list
              </button>
            ) : (
              <button
                onClick={() => setCart([...cart, movie])}
                className="modal__button"
              >
                Add to List
              </button>
            )}
          </div>
        </div>
        <div className="modal__moviedesc">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModalWindow;
