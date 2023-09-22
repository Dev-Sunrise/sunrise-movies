import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const BannerItem = ({ item }) => {
  const {
    backdrop_path,
    title,
    release_date,
    vote_average,
    original_language,
    popularity,
    overview,
    id
  } = item

  const navigate = useNavigate()

  return (
    <>
      <div className="w-full h-full pointer-events-none ">
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt=""
          className="object-fill w-full h-full"
        />
        <div className="absolute inset-0 video-overlay"></div>
      </div>
      <div className="absolute px-[15px] md:px-0 lg:p-[30px] rounded-lg md:left-[90px] top-2/4 -translate-y-2/4 z-10 text-white w-full max-w-[660px] select-none bg-darkColor1 bg-opacity-50">
        <div className="flex items-center mb-[10px] md:mb-5 text-sm font-bold uppercase text-primary">
          <span>Popularity:</span>
          <span className="pr-[5px]"></span>
          <span>{Math.round(popularity)}</span>
        </div>

        <h3 className="leading-[45px] md:leading-[75px] mb-[10px] md:mb-5 text-[30px] md:text-[67px]  font-bold line-clamp-1 md:line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center mb-5 md:mb-[32px] text-grayColor1">
          <div className="flex items-start">
            <span className="text-primary mr-[17px]">
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

          <div className="flex items-center">
            <span className="w-[3px] h-[3px] bg-white rounded-full mx-4"></span>
            <span>{new Date(release_date).getFullYear()}</span>
          </div>

          <span className="text-sm px-[7px] ml-[15px] leading-[23px] font-medium rounded-[5px] bg-white bg-opacity-10 uppercase">
            {original_language}
          </span>
        </div>

        <p className="text-xs md:text-base mb-5 line-clamp-2 md:mb-[32px] text-grayColor1 text-justify">
          {overview}
        </p>

        <button
          onClick={() => {
            navigate(`/movie/${id}`)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="rounded-[10px] text-white font-bold py-[10px] md:py-[15px] w-[140px] md:w-[175px] justify-center flex items-center bg-gradient-to-r from-btnColor1 via-btnColor2 to-btnColor3 gap-x-[5px] transition-all hover:shadow-buttonShadow hover:-translate-y-[3px]"
        >
          <span>Play Now</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  )
}

BannerItem.propTypes = {
  item: PropTypes.any
}

export default BannerItem
