import React from "react";
import PropTypes from "prop-types";

const GridMovieList = ({ children }) => {
  return <div className="mb-[50px] md:mb-[80px]">{children}</div>;
};

GridMovieList.propTypes = {
  children: PropTypes.node,
};

export default GridMovieList;
