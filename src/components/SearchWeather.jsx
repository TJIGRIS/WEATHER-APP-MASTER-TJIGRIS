import React from 'react'

import { BiCurrentLocation } from 'react-icons/bi'
import { useWeatherContext } from '../context/WeatherContexProvider'
import { AiOutlineClose } from 'react-icons/ai'

export default function SearchWeather () {
  const {
    search,
    toogle,
    changeSearch,
    getWeather,
    setToogle,
    getWeatherApiLocation
  } = useWeatherContext()

  const handleChangeSearch = (e) => {
    const newCity = e.target.value
    changeSearch(newCity)
  }

  const handleGetWeather = (e) => {
    e.preventDefault()
    getWeather()
  }

  const handleSetToogle = (e) => {
    e.preventDefault()
    setToogle(!toogle)
  }

  const handleWeatherApiLocation = (e) => {
    e.preventDefault()
    getWeatherApiLocation()
  }

  return (
    <>
      {toogle === false && (
        <header className='relative flex justify-between items-center'>
          <div>
            <input
              className='w-[161px] h-[40px] bg-accent shadow-card pl-3 outline-none'
              type='text'
              placeholder='Search for places'
              onClick={handleSetToogle}
            />
          </div>

          <button
            className='w-[40px] h-[40px] bg-accent shadow-card rounded-full flex justify-center items-center'
            onClick={handleWeatherApiLocation}>
            <BiCurrentLocation size={24} />
          </button>
        </header>
      )}

      {toogle && (
        <>
          <header className='relative'>
            <div className='flex justify-between items-center'>
              <div></div>
              <AiOutlineClose
                className='cursor-pointer mb-4'
                size={24}
                onClick={handleSetToogle}
              />
            </div>

            <div className='flex justify-between items-center'>
              <form onSubmit={handleGetWeather}>
                <input
                  className='w-[161px] h-[40px] bg-accent shadow-card pl-3 outline-none'
                  autoFocus
                  type='text'
                  value={search}
                  placeholder='Search for places'
                  onChange={handleChangeSearch}
                />
              </form>

              <button>Search</button>
            </div>
          </header>

          <section className='h-full'>f</section>
        </>
      )}
    </>
  )
}
