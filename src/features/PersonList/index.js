import useSWR from "swr";
import React from "react";
import PropTypes from "prop-types";
import PersonItem, { LoadingPersonItem } from "./components/PersonItem";
import MovieHeadingList from "features/MovieList/components/MovieHeadingList";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { fetcher, tmdbApi } from "api/config";
import "swiper/css/navigation";

const PersonList = ({ person }) => {
  const { data, error } = useSWR(tmdbApi.getMoviePerson(person), fetcher);

  const isLoading = !data && !error;

  const dataMovies = data?.results || [];

  return (
    <div className="mb-[80px] text-white page-container">
      <MovieHeadingList heading="Top Artists"></MovieHeadingList>
      <div className="select-none person-swiper movie-banner">
        {isLoading && (
          <>
            <Swiper
              grabCursor={"true"}
              spaceBetween={23}
              slidesPerView="auto"
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <LoadingPersonItem></LoadingPersonItem>
              </SwiperSlide>
              <SwiperSlide>
                <LoadingPersonItem></LoadingPersonItem>
              </SwiperSlide>
              <SwiperSlide>
                <LoadingPersonItem></LoadingPersonItem>
              </SwiperSlide>
              <SwiperSlide>
                <LoadingPersonItem></LoadingPersonItem>
              </SwiperSlide>
              <SwiperSlide>
                <LoadingPersonItem></LoadingPersonItem>
              </SwiperSlide>
              <SwiperSlide>
                <LoadingPersonItem></LoadingPersonItem>
              </SwiperSlide>
              <SwiperSlide>
                <LoadingPersonItem></LoadingPersonItem>
              </SwiperSlide>
            </Swiper>
          </>
        )}
        {!isLoading && (
          <Swiper
            grabCursor={"true"}
            spaceBetween={23}
            slidesPerView="auto"
            navigation={true}
            modules={[Navigation]}
          >
            {dataMovies &&
              dataMovies.length > 0 &&
              dataMovies.map((item) => (
                <SwiperSlide>
                  <PersonItem key={item.id} item={item}></PersonItem>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

PersonList.propTypes = {
  person: PropTypes.string,
};

export default PersonList;
