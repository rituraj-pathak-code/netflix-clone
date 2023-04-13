import { useState } from "react";

import "./Home.css";
import Row from "./Row";
import Banner from "./Banner";

import Footer from "./Footer";
import requests from "../requests.js";

function Home(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const checkModal = (isOpenModal) => {
    setModalOpen(isOpenModal);
    // console.log(isModalOpen);
  };

  return (
    <div className={`home ${isModalOpen ? "home_scrolllock" : ""}`}>
      <div className={`${isModalOpen ? "home_overlay" : ""}`}></div>

      <Banner />

      <Row
        title="Netflix Original"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
        checkModal={checkModal}
      />
      <Row
        title="Trending Now"
        fetchURL={requests.fetchTrending}
        checkModal={checkModal}
      />
      <Row
        title="Top Rated"
        fetchURL={requests.fetchTopRated}
        checkModal={checkModal}
      />
      <Row
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
        checkModal={checkModal}
      />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        checkModal={checkModal}
      />
      <Row
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        checkModal={checkModal}
      />
      <Row
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
        checkModal={checkModal}
      />
      <Row
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
        checkModal={checkModal}
      />
      <Footer />
    </div>
  );
}

export default Home;
