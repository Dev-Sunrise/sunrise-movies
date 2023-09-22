import React from "react";
import PropTypes from "prop-types";

const MovieHeadingList = ({ heading }) => {
  return (
    <h2 className="capitalize text-white mb-[31px] font-bold text-[25px] select-none">
      {heading}
    </h2>
  );
};

MovieHeadingList.propTypes = {
  heading: PropTypes.string,
};

export default MovieHeadingList;
