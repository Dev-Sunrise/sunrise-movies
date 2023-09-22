import useSWR from "swr";
import ReactPlayer from "react-player";
import React from "react";
import PropTypes from "prop-types";
import Loading from "components/Loading";
import { fetcher, tmdbApi } from "api/config";

const DetailVideo = ({ movieId }) => {
  const { data } = useSWR(tmdbApi.getMovieVideo(movieId), fetcher);

  const dataMovies = data?.results[0] || [];

  return (
    <div className="w-full h-[290px] md:h-[490px] lg:h-[590px] mb-[80px]">
      <ReactPlayer
        className="video-player"
        controls
        playing
        width="100%"
        height="100%"
        url={`https://www.youtube.com/embed/${dataMovies.key}`}
      />
    </div>
  );
};

export const LoadingDetailVideo = () => {
  return (
    <div className="w-full h-[290px] md:h-[490px] lg:h-[590px] mb-[80px]">
      <Loading width="100%" height="100%"></Loading>
    </div>
  );
};

DetailVideo.propTypes = {
  movieId: PropTypes.number,
};

export default DetailVideo;
