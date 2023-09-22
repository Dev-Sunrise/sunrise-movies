import useSWR from "swr";
import React from "react";
import PropTypes from "prop-types";
import BannerItem from "./components/BannerItem";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { fetcher, tmdbApi } from "api/config";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = ({ type }) => {
  const { data } = useSWR(tmdbApi.getMovie(type), fetcher);

  const dataMovies = data?.results || [];

  return (
    <section className="page-wrapper movie-banner  h-[550px] md:h-[795px] w-full relative mb-[30px] overflow-hidden md:mb-[58px]">
      <Swiper
        grabCursor={"true"}
        slidesPerView="auto"
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {dataMovies &&
          dataMovies.length > 0 &&
          dataMovies.map((item) => (
            <SwiperSlide>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

Banner.propTypes = {
  type: PropTypes.any,
};

export default Banner;
