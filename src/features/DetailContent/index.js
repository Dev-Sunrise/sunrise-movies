import React from "react";
import PropTypes from "prop-types";

const DetailContent = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row gap-y-[45px] md:gap-y-0 gap-x-[45px] mb-[70px] md:mb-[100px]">
      <div className="w-full md:w-[305px] h-[430px] md:h-[500px] lg:h-[542px] flex-shrink-0">
        <DetailContentImage item={item}></DetailContentImage>
      </div>

      <div className="flex-1 text-grayColor1">
        <DetailContentInfor item={item}></DetailContentInfor>
      </div>
    </div>
  );
};

const DetailContentImage = ({ item }) => {
  const { poster_path } = item;

  return (
    <img
      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
      alt=""
      className="object-fill w-full h-full rounded-[10px]"
    />
  );
};

const DetailContentInfor = ({ item }) => {
  const {
    title,
    vote_average,
    popularity,
    release_date,
    revenue,
    spoken_languages,
    genres,
    overview,
    production_companies,
    tagline,
    original_language,
  } = item;

  return (
    <>
      <h2 className="mb-[45px] leading-[56px] text-[40px] md:text-[50px] text-white font-bold capitalize">
        {title}
      </h2>
      <div className="flex items-center mb-3 text-lg">
        <div className="flex items-start">
          <span className="text-primary mr-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6"
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
        <span className="w-[3px] h-[3px] bg-white rounded-full mx-4"></span>
        <div className="flex items-center ">
          <span>Popularity:</span>
          <span className="pr-[5px]"></span>
          <span>{Math.round(popularity)}</span>
        </div>
      </div>
      <div className="flex items-center mb-3 ">
        <span>{new Date(release_date).getFullYear()}</span>
        <span className="w-[3px] h-[3px] bg-white rounded-full mx-4"></span>
        <div className="flex items-center ">
          <span>Revenue:</span>
          <span className="pr-[5px]"></span>
          <span>{revenue ? revenue : "No statistics yet"}</span>
        </div>
        <span className="w-[3px] h-[3px] bg-white rounded-full mx-4"></span>
        <span className=" px-[7px] leading-[23px] font-medium rounded-[5px] bg-white bg-opacity-10 uppercase">
          {original_language}
        </span>
      </div>
      <span className="block mb-[25px] ">
        {genres?.length > 0 && genres.map((item) => item.name).join(", ")}
      </span>
      <p className="mb-6">{overview}</p>
      <div className="flex flex-col gap-y-2">
        <div className="text-lg">
          <span className="mr-[26px] font-bold text-white">Companies:</span>
          <span>
            {production_companies?.length > 0 &&
              production_companies.map((item) => item.name).join(", ")}
          </span>
        </div>
        <div className="text-lg">
          <span className="mr-[26px] font-bold text-white">
            Spoken Languages:
          </span>
          <span>
            {spoken_languages?.length > 0 &&
              spoken_languages.map((item) => item.english_name).join(", ")}
          </span>
        </div>
        <div className="text-lg">
          <span className="mr-[26px] font-bold text-white">Tagline:</span>
          <span>{tagline}</span>
        </div>
      </div>
    </>
  );
};

DetailContent.propTypes = {
  item: PropTypes.any,
};

export default DetailContent;
