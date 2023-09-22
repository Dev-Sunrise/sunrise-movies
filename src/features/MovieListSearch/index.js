import ReactPaginate from "react-paginate";
import React from "react";
import PropTypes from "prop-types";
import MovieListSearchSildebar from "./components/MovieListSearchSildebar";
import GridMovieListSearch from "./components/GridMovieListSearch";
import MovieListSearchItem, {
  LoadingMovieListSearchItem,
} from "./components/MovieListSearchItem";

const MovieListSearch = ({
  dataMovies,
  loading,
  handlePageClick,
  pageCount,
}) => {
  return (
    <div className="">
      <div className="flex  items-start lg:gap-x-[15px]">
        <div className="w-full flex-shrink-0 max-w-[213px] hidden text-white lg:block p-[10px] select-none">
          <MovieListSearchSildebar type="upcoming"></MovieListSearchSildebar>
        </div>
        <div className="relative flex-1">
          {loading && (
            <>
              <GridMovieListSearch>
                <LoadingMovieListSearchItem></LoadingMovieListSearchItem>
                <LoadingMovieListSearchItem></LoadingMovieListSearchItem>
                <LoadingMovieListSearchItem></LoadingMovieListSearchItem>
                <LoadingMovieListSearchItem></LoadingMovieListSearchItem>
                <LoadingMovieListSearchItem></LoadingMovieListSearchItem>
              </GridMovieListSearch>
            </>
          )}

          {!loading && (
            <GridMovieListSearch>
              {dataMovies &&
                dataMovies.length > 0 &&
                dataMovies.map((item) => (
                  <MovieListSearchItem
                    key={item.id}
                    item={item}
                  ></MovieListSearchItem>
                ))}
            </GridMovieListSearch>
          )}

          <div className="mt-[50px]">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

MovieListSearch.propTypes = {
  dataMovies: PropTypes.any,
  loading: PropTypes.bool,
  handlePageClick: PropTypes.func,
  pageCount: PropTypes.number,
};

export default MovieListSearch;
