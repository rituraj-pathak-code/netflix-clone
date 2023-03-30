import React from "react";
import "./MovieModalWindow.css";

const MovieModalWindow = (props) => {
  return (
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
          height: "50%",
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
  );
};

export default MovieModalWindow;
