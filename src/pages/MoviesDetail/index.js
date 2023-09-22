import useSWR from 'swr'
import React, { useEffect } from 'react'
import PersonItem, {
  LoadingPersonItem
} from 'features/PersonList/components/PersonItem'
import MovieHeadingList from 'features/MovieList/components/MovieHeadingList'
import DetailVideo, { LoadingDetailVideo } from 'features/DetailVideo'
import DetailContentListMovie, {
  LoadingDetailContentListMovie
} from 'features/DetailContentListMovie'
import DetailContent from 'features/DetailContent'
import { useParams } from 'react-router-dom'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { fetcher, tmdbApi } from 'api/config'
import 'swiper/css/navigation'

const MoviesDetail = () => {
  const isBrowser = () => typeof window !== 'undefined'

  useEffect(() => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const { movieId } = useParams()

  const { data, error } = useSWR(tmdbApi.getMovie(movieId), fetcher)
  const dataMovies = data || []
  const isLoading = !data && !error
  const { data: dataSimilar } = useSWR(
    tmdbApi.getMovieList(movieId, 'similar'),
    fetcher
  )
  const dataMoviesSimilar = dataSimilar?.results || []

  const { data: dataCasts } = useSWR(
    tmdbApi.getMovieList(movieId, 'credits'),
    fetcher
  )
  const dataMoviesCasts = dataCasts?.cast || []

  return (
    <div className="mt-[80px] mb-[96px] page-container">
      {isLoading && (
        <>
          <LoadingDetailVideo></LoadingDetailVideo>
        </>
      )}
      {!isLoading && (
        <>
          <DetailVideo movieId={movieId}></DetailVideo>
        </>
      )}
      <DetailContent item={dataMovies}></DetailContent>

      <div className="mb-[50px]">
        <MovieHeadingList heading="Artists"></MovieHeadingList>
        <div className="select-none person-swiper movie-banner">
          {isLoading && (
            <>
              <Swiper
                grabCursor={'true'}
                spaceBetween={23}
                slidesPerView="auto"
                navigation={true}
                modules={[Navigation]}
              >
                <SwiperSlide>
                  <LoadingPersonItem></LoadingPersonItem>
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingPersonItem></LoadingPersonItem>
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingPersonItem></LoadingPersonItem>
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingPersonItem></LoadingPersonItem>
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingPersonItem></LoadingPersonItem>
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingPersonItem></LoadingPersonItem>
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingPersonItem></LoadingPersonItem>
                </SwiperSlide>
              </Swiper>
            </>
          )}
          {!isLoading && (
            <Swiper
              grabCursor={'true'}
              spaceBetween={23}
              slidesPerView="auto"
              navigation={true}
              modules={[Navigation]}
            >
              {dataMoviesCasts &&
                dataMoviesCasts.length > 0 &&
                dataMoviesCasts.map((item) => (
                  <SwiperSlide>
                    <PersonItem key={item.id} item={item}></PersonItem>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </div>

      <div>
        <MovieHeadingList heading="Similar"></MovieHeadingList>
        <div className="mb-[52px] detail-card-swiper movie-banner ">
          {isLoading && (
            <>
              <Swiper
                grabCursor={'true'}
                spaceBetween={20}
                slidesPerView="auto"
                navigation={true}
                modules={[Navigation]}
              >
                <SwiperSlide>
                  <LoadingDetailContentListMovie></LoadingDetailContentListMovie>
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingDetailContentListMovie></LoadingDetailContentListMovie>
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingDetailContentListMovie></LoadingDetailContentListMovie>
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingDetailContentListMovie></LoadingDetailContentListMovie>
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingDetailContentListMovie></LoadingDetailContentListMovie>
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingDetailContentListMovie></LoadingDetailContentListMovie>
                </SwiperSlide>
              </Swiper>
            </>
          )}
          {!isLoading && (
            <Swiper
              grabCursor={'true'}
              spaceBetween={20}
              slidesPerView="auto"
              navigation={true}
              modules={[Navigation]}
            >
              {dataMoviesSimilar &&
                dataMoviesSimilar.length > 0 &&
                dataMoviesSimilar.map((item) => (
                  <SwiperSlide>
                    <DetailContentListMovie
                      key={item.id}
                      item={item}
                    ></DetailContentListMovie>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  )
}

export default MoviesDetail
