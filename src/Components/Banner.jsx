import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
        </div>
        <p className="banner__description">{movie?.overview}</p>
      </div>
      <div className="banner__fadebottom"></div>
    </header>
  );
};

export default Banner;
