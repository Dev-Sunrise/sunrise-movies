import React from "react";
import MovieHeadingList from "./components/MovieHeadingList";
import MoviecardList from "./components/MoviecardList";
import GridMovieList from "./components/GridMovieList";

const MovieList = () => {
  return (
    <section className="page-container mb-[30px] md:mb-[58px]">
      <GridMovieList>
        <MovieHeadingList heading="Top Rated"></MovieHeadingList>
        <MoviecardList type="top_rated"></MoviecardList>
      </GridMovieList>

      <GridMovieList>
        <MovieHeadingList heading="Now Playing"></MovieHeadingList>
        <MoviecardList></MoviecardList>
      </GridMovieList>

      <GridMovieList>
        <MovieHeadingList heading="Popular"></MovieHeadingList>
        <MoviecardList type="popular"></MoviecardList>
      </GridMovieList>
    </section>
  );
};

export default MovieList;
