import useSWR from "swr";
import React from "react";
import PropTypes from "prop-types";
import MovieCard, { LoadingMovieCard } from "../MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { fetcher, tmdbApi } from "api/config";
import "swiper/css/navigation";

const MoviecardList = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(tmdbApi.getMovie(type), fetcher);

  const isLoading = !data && !error;

  const dataMovies = data?.results || [];

  return (
    <div className="movie-card-swiper movie-banner">
      {isLoading && (
        <>
          <Swiper
            grabCursor={"true"}
            spaceBetween={15}
            slidesPerView="auto"
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <LoadingMovieCard></LoadingMovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <LoadingMovieCard></LoadingMovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <LoadingMovieCard></LoadingMovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <LoadingMovieCard></LoadingMovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <LoadingMovieCard></LoadingMovieCard>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      {!isLoading && (
        <Swiper
          grabCursor={"true"}
          spaceBetween={15}
          slidesPerView="auto"
          navigation={true}
          modules={[Navigation]}
        >
          {dataMovies &&
            dataMovies.length > 0 &&
            dataMovies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

MoviecardList.propTypes = {
  type: PropTypes.string,
};

export default MoviecardList;
