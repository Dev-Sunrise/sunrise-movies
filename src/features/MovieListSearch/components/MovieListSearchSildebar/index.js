import useSWR from "swr";
import React from "react";
import PropTypes from "prop-types";
import MovieListSearchSildebarItem from "../MovieListSearchSildebarItem";
import { fetcher } from "api/config";

const MovieListSearchSildebar = ({ type }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=c0c36b6248307167e7611b2961acf74f`,
    fetcher
  );

  const dataMovies = data?.results.slice(0, 5) || [];

  return (
    <>
      <h3 className="text-[21px] font-bold capitalize mb-[30px]">
        Top Upcoming
      </h3>
      {dataMovies &&
        dataMovies.length > 0 &&
        dataMovies.map((item, index) => (
          <MovieListSearchSildebarItem
            key={item.id}
            index={index}
            item={item}
          ></MovieListSearchSildebarItem>
        ))}
    </>
  );
};

MovieListSearchSildebar.propTypes = {
  type: PropTypes.string,
};

export default MovieListSearchSildebar;
