import React, { useState } from "react";
import "./MovieModalWindow.css";

const MovieModalWindow = (props) => {
  const opts = { height: "300", width: "100%", playerVars: { autoplay: 1 } };

  return (
    <div className="movie_modal__container">
      <div className="movie__modal">
        <button
          className="modal__closebtn"
          onClick={() => {
            props.closeModal(false);
            props.checkModal(false);
          }}
        >
          X
        </button>

        <div
          className="movie_modal__banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${props.poster}")`,
            backgroundPosition: "center",
            height: "300px",
          }}
        >
          <div className="modal__buttons">
            <button className="modal__button">Play</button>
            <button className="modal__button">Add to List</button>
          </div>
        </div>
        <div className="modal__moviedesc">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModalWindow;
