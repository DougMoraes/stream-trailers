import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { CircularProgress } from "@material-ui/core";
import { apiKey, movieAPI, searchMovieAPI, serieAPI } from "../../utils/APIs";
import ItemPoster from "../ItemPoster/ItemPoster";
import "react-multi-carousel/lib/styles.css";

const ItemsCarousel = props => {
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const { category } = props;

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1640 },
      items: 8,
      slidesToSlide: 8 
    },
    desktop: {
      breakpoint: { max: 1640, min: 1250 },
      items: 6,
      slidesToSlide: 6 
    },
    smallDesktop: {
      breakpoint: { max: 1250, min: 840 },
      items: 4,
      slidesToSlide: 4 
    },
    tablet: {
      breakpoint: { max: 840, min: 464 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };

  useEffect(() => {
    const getPopularMovies = () => {
      movieAPI
        .get("/popular?api_key=" + apiKey)
        .then(resp => resp.data)
        .then(data => {
          return splitArray(8, data.results);
        })
        .then(results => {
          setItemsToDisplay(results);
        });
    };

    const getPopularSeries = () => {
      serieAPI
        .get("/popular?api_key=" + apiKey)
        .then(resp => resp.data)
        .then(data => {
          return splitArray(8, data.results);
        })
        .then(results => {
          setItemsToDisplay(results);
        });
    };

    const getMoviesByGenre = () => {
      const genreId = category === "family_movies" ? "10751" : "99";

      searchMovieAPI
        .get(`?api_key=${apiKey}&with_genres=${genreId}`)
        .then(resp => resp.data)
        .then(data => {
          return splitArray(8, data.results);
        })
        .then(results => {
          setItemsToDisplay(results);
        });
    };

    category === "popular_series"
      ? getPopularSeries()
      : category === "popular_movies"
      ? getPopularMovies()
      : getMoviesByGenre();
  }, [category]);


  const splitArray = (itemsPerArray, array) => {
    return new Array(Math.ceil(array.length / itemsPerArray))
      .fill()
      .map(() => array.splice(0, itemsPerArray));
  };

  const renderCarousel = array => {
    return (
      <Carousel
        partialVisbile={false}
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {array.map(itemsSet =>
          itemsSet.map(item => <ItemPoster key={item.id} itemData={item} />)
        )}
      </Carousel>
    );
  };

  return itemsToDisplay.length !== 0 ? (
    renderCarousel(itemsToDisplay)
  ) : (
    <CircularProgress />
  );
};

export default ItemsCarousel;
