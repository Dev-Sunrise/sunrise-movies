import React from "react";
import PropTypes from "prop-types";

const GridMovieListSearch = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
      {children}
    </div>
  );
};

GridMovieListSearch.propTypes = {
  children: PropTypes.node,
};

export default GridMovieListSearch;
