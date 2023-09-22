import React from "react";
import PropTypes from "prop-types";
import Loading from "components/Loading";

const PersonItem = ({ item }) => {
  const { profile_path, name } = item;

  return (
    <div className="flex flex-col gap-y-[18px] items-center text-white">
      <div className="rounded-full overflow-hidden w-[205px] h-[205px]   border-[3px] border-primary ">
        <img
          src={`https://image.tmdb.org/t/p/original/${profile_path}`}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <span className="text-lg font-bold line-clamp-1 hover:text-primary">
        {name}
      </span>
    </div>
  );
};

export const LoadingPersonItem = () => {
  return (
    <div className="flex flex-col gap-y-[18px] items-center text-white">
      <Loading width="205px" height="205px" radius="100%"></Loading>
      <span className="text-lg font-bold line-clamp-1 hover:text-primary">
        <Loading width="154px" height="28px"></Loading>
      </span>
    </div>
  );
};

PersonItem.propTypes = {
  item: PropTypes.any,
};

export default PersonItem;
