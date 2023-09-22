import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const MovieListSearchSildebarItem = ({ item, index }) => {
  const { poster_path, title, vote_average, id } = item

  const navigate = useNavigate()

  return (
    <>
      <div className="mb-[30px] last:mb-0">
        <div
          onClick={() => {
            navigate(`/movie/${id}`)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-x-[17px] cursor-pointer"
        >
          <span className="mr-[17px] text-[21px] font-bold">{index + 1}</span>
          <div className="flex items-center gap-x-3">
            <div className="w-10 h-[56px] flex-shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <p className="mb-[5px] text-sm font-bold line-clamp-1">{title}</p>
              <div className="flex items-start text-sm">
                <span className="text-primary mr-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </span>
                <span>{vote_average}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

MovieListSearchSildebarItem.propTypes = {
  item: PropTypes.any,
  index: PropTypes.number
}

export default MovieListSearchSildebarItem
