import React, { useState, useEffect } from "react";

import axios from "../axios";
import "./Row.css";
import MovieModalWindow from "./MovieModalWindow";
const baseURL = "https://image.tmdb.org/t/p/original/";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  const [movieInfo, setmovieInfo] = useState({});

  const responsive = {
    supersuperLargeDesktop: {
      breakpoint: { max: 1700, min: 1550 },
      items: 9,
    },
    superLargeDesktop: {
      breakpoint: { max: 1550, min: 1370 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 1370, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 780 },
      items: 5,
    },
    bigger_mobile: {
      breakpoint: { max: 780, min: 578 },
      items: 4,
    },
    big_mobile: {
      breakpoint: { max: 578, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const responsivesub = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    big_mobile: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="row">
      <h2 className="title">{props.title}</h2>
      {movies.map(
        (movie) =>
          showModal && (
            <MovieModalWindow
              checkModal={props.checkModal}
              key={movie.id}
              closeModal={setshowModal}
              movie={movieInfo}
            />
          )
      )}
      <Carousel
        responsive={props.isLargeRow ? responsive : responsivesub}
        className="row__posters"
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              className={`row__poster ${
                props.isLargeRow && "row__posterLarge"
              }`}
              src={`${baseURL}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
              onClick={() => {
                setshowModal(true);
                setmovieInfo({
                  id: movie.id,
                  title: movie.original_title,
                  description: movie.overview,
                  poster: movie.backdrop_path,
                });
                props.checkModal(true);
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Row;
