import React from 'react'
import PropTypes from 'prop-types'
import Loading from 'components/Loading'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ item }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    original_language,
    popularity,
    id
  } = item

  const navigate = useNavigate()

  return (
    <div className="rounded-[10px] flex flex-col h-full bg-secondary text-white select-none">
      <div className="rounded-[10px] group  w-full h-[400px]  mb-5 relative ">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="object-cover w-full h-full rounded-[10px]"
        />
        <span
          onClick={() => {
            navigate(`/movie/${id}`)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="absolute text-white transition-all cursor-pointer top-2/4 -translate-x-2/4 left-2/4 hover:text-primary translate-y-[-50px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-[48px] h-[48px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-col flex-1">
        <h3
          onClick={() => {
            navigate(`/movie/${id}`)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="mb-6 text-lg font-bold truncate transition-all cursor-pointer hover:text-primary"
        >
          {title}
        </h3>

        <div className="mt-auto cursor-default">
          <div className="flex items-center justify-between mb-[10px] text-grayColor1">
            <div className="flex items-center">
              <span>{new Date(release_date).getFullYear()}</span>

              <div className="flex items-center">
                <span className="w-[3px] h-[3px] bg-white rounded-full mx-4"></span>
                <div className="flex items-start">
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

            <span className="text-sm px-[7px]  leading-[23px] font-medium rounded-[5px] bg-white bg-opacity-10 uppercase">
              {original_language}
            </span>
          </div>

          <div className="flex items-center text-grayColor1">
            <span>Popularity:</span>
            <span className="pr-[5px]"></span>
            <span>{Math.round(popularity)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const LoadingMovieCard = () => {
  return (
    <div className="rounded-[10px] flex flex-col h-full bg-secondary text-white select-none">
      <Loading
        width="100%"
        height="400px"
        radius="10px"
        className="mb-5"
      ></Loading>

      <div className="flex flex-col flex-1">
        <h3 className="mb-6 text-lg font-bold truncate transition-all cursor-pointer hover:text-primary">
          <Loading width="100%" height="28px"></Loading>
        </h3>

        <div className="mt-auto cursor-default">
          <div className="flex items-center justify-between mb-[10px] text-grayColor1">
            <Loading width="113px" height="28px"></Loading>

            <Loading width="32px" height="28px"></Loading>
          </div>

          <div className="flex items-center text-grayColor1">
            <Loading width="100%" height="24px"></Loading>
          </div>
        </div>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  item: PropTypes.any
}

export default MovieCard
