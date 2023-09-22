import React from 'react'
import PropTypes from 'prop-types'
import Loading from 'components/Loading'
import { useNavigate } from 'react-router-dom'

const DetailContentListMovie = ({ item }) => {
  const { poster_path, title, release_date, vote_average, overview, id } = item
  const navigate = useNavigate()

  return (
    <div className="relative w-full overflow-hidden text-white group">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="object-cover w-full h-[450px] md:h-[300px] mb-[13px] rounded-[10px]"
      />
      <h3 className="text-lg font-bold text-center line-clamp-1">{title}</h3>
      <div className="translate-x-[100%] group-hover:translate-x-[0] transition-all absolute inset-0 flex flex-col  bg-darkColor1 rounded-[10px] p-[10px]">
        <div>
          <h3 className="text-lg font-bold mb-[10px] line-clamp-1">{title}</h3>
          <div className="flex items-center text-sm text-grayColor1 mb-[10px]">
            <span>{new Date(release_date).getFullYear()}</span>
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
              <span>{Number(vote_average).toFixed(1)}</span>
            </div>
          </div>
          <p className="text-sm text-grayColor1 line-clamp-6">{overview}</p>
        </div>
        <button
          onClick={() => {
            navigate(`/movie/${id}`)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="mt-auto font-bold transition-all hover:text-primary"
        >
          Detail
        </button>
      </div>
    </div>
  )
}

export const LoadingDetailContentListMovie = () => {
  return (
    <div className="relative w-full overflow-hidden text-white group">
      <Loading
        width="100%"
        height="350px"
        radius="10px"
        className="mb-[13px]"
      ></Loading>
      <h3 className="text-lg font-bold text-center line-clamp-1">
        <Loading width="100%" height="28px"></Loading>
      </h3>
    </div>
  )
}

DetailContentListMovie.propTypes = {
  item: PropTypes.any
}

export default DetailContentListMovie
