import "./MyList.css";
import { useContext } from "react";
import { CartContext } from "../Context";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyList = () => {
  const { cart } = useContext(CartContext);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="myList">
      <h2>Your List</h2>
      {cart.length === 0 ? (
        <p>No items in your list</p>
      ) : (
        <Carousel
          responsive={responsive}
          className="row__posters"
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {cart.map((movie) => (
            <div key={Math.random()}>
              <img
                className="cart_movie"
                src={`https://image.tmdb.org/t/p/original/${movie.poster}`}
              ></img>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default MyList;
