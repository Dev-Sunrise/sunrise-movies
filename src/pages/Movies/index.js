import useSWR from 'swr'
import useDebounce from 'hooks/useDebounce'
import React, { useEffect, useState } from 'react'
import MovieListSearch from 'features/MovieListSearch'
import { fetcher, tmdbApi } from 'api/config'

let itemsPerPage = 15

const Movies = () => {
  const isBrowser = () => typeof window !== 'undefined'

  useEffect(() => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const [filter, setFilter] = useState('')
  const filterDebounce = useDebounce(filter)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [nextPage, setNextPage] = useState(1)
  const [url, setUrl] = useState(tmdbApi.getMovie('popular', nextPage))

  const { data, error } = useSWR(url, fetcher)
  const dataMovies = data?.results || []

  const loading = !data && !error

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbApi.getMovieSearch(filterDebounce, nextPage))
    } else {
      setUrl(tmdbApi.getMovie('popular', nextPage))
    }
  }, [filterDebounce, nextPage])

  useEffect(() => {
    if (!data || !data.total_results) return
    setPageCount(Math.ceil(data.total_results / itemsPerPage))
  }, [data, itemOffset])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results
    setItemOffset(newOffset)
    setNextPage(event.selected + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="pt-[90px] mb-[80px] page-container">
      <div className="mb-10 text-center text-white">
        <input
          type="text"
          className="outline-none px-[15px] border border-grayColor1  bg-transparent py-[10px] rounded-[5px] w-full max-w-[350px] text-sm focus:border-primary transition-all placeholder:text-grayColor1"
          placeholder="Search movies..."
          onChange={handleFilterChange}
        />
      </div>
      <MovieListSearch
        loading={loading}
        dataMovies={dataMovies}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
      ></MovieListSearch>
    </div>
  )
}

export default Movies
