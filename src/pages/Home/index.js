import React, { useEffect } from 'react'
import PersonList from 'features/PersonList'
import MovieList from 'features/MovieList'
import Banner from 'features/Banner'

const Home = () => {
  const isBrowser = () => typeof window !== 'undefined'

  useEffect(() => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Banner type="upcoming"></Banner>
      <PersonList person="person"></PersonList>
      <MovieList></MovieList>
    </>
  )
}

export default Home
