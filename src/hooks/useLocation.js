import { useEffect } from 'react'
import { WeatherApiLocation } from '../services/WeatherApi'

export function useLocation (location, setLocation, setWeather) {
  const getWeatherApiLocation = async () => {
    const response = await WeatherApiLocation(
      location.latitude,
      location.longitude
    )

    setWeather(response)
  }

  useEffect(() => {
    getWeatherApiLocation()
  }, [location])

  useEffect(() => {
    function getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
      } else {
        throw new Error('Geolocation is not supported by this browser.')
      }
    }

    function showPosition (position) {
      setLocation((prevLocation) => ({
        ...prevLocation,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }))
    }

    getLocation()
  }, [])
}
