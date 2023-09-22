import Main from "pages/Main";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";

const MoviesDetail = lazy(() => import("pages/MoviesDetail"));
const Movies = lazy(() => import("pages/Movies"));
const Home = lazy(() => import("pages/Home"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <>
            <div className="loader">
              <div className="inner one"></div>
              <div className="inner two"></div>
              <div className="inner three"></div>
            </div>
          </>
        }
      >
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movie/:movieId" element={<MoviesDetail />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
