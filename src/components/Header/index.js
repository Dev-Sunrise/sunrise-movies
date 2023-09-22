import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);

  const handleScrllActive = () => {
    if (window.scrollY >= 100) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrllActive);
    return () => {
      window.removeEventListener("scroll", handleScrllActive);
    };
  }, []);

  return (
    <header
      className={`z-[49]  fixed top-0 right-0 left-0 transition-all select-none  ${
        scrollActive
          ? "bg-gradient-to-b from-secondary to-darkColor1"
          : "bg-transparent"
      }`}
    >
      <div className="page-container flex items-center h-[80px]  ">
        <Link to="/" className="flex items-center gap-x-[10px] flex-shrink-0">
          <img
            src="/logo.png"
            alt=""
            className="object-cover w-[30px] h-[30px] md:w-10 md:h-10"
          />
          <span className="text-[23px] md:text-2xl font-bold text-white">
            Sunrise Movies
          </span>
        </Link>

        <div className="flex items-center text-white gap-x-5 ml-10 md:ml-[80px] text-sm font-bold  cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary" : "hover:text-primary transition-all"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "text-primary" : "hover:text-primary transition-all"
            }
          >
            Movies
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
