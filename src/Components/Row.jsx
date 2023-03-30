import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import "./Row.css";
import MovieModalWindow from "./MovieModalWindow";
const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [showModal, setshowModal] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchURL]);

  const [movieInfo, setmovieInfo] = useState([]);

  return (
    <div className="row">
      <h2 className="title">{props.title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            (showModal && (
              <MovieModalWindow
                checkModal={props.checkModal}
                key={movie.id}
                title={movieInfo[0]}
                description={movieInfo[1]}
                poster={movieInfo[2]}
                closeModal={setshowModal}
              />
            )) || (
              <img
                key={movie.id}
                className={`row__poster ${
                  props.isLargeRow && "row__posterLarge"
                }`}
                src={`${baseURL}${
                  props.isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
                onClick={() => {
                  setshowModal(true);
                  setmovieInfo([
                    movie.original_title,
                    movie.overview,
                    movie.backdrop_path,
                  ]);
                  props.checkModal(true);
                }}
              />
            )
        )}
        {/* {showModal && <MovieModalWindow />} */}
      </div>
    </div>
  );
};

export default Row;
