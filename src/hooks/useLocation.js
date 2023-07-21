import { useEffect } from 'react'
import { WeatherApiLocation } from '../services/WeatherApi'

export function useLocation (location, units, inicial, setLocation, setWeather) {
  const getWeatherApiLocation = async () => {
    const response = await WeatherApiLocation(
      location.latitude,
      location.longitude,
      units.name
    )

    setWeather(response)
  }

  useEffect(() => {
    getWeatherApiLocation()
  }, [location, (inicial === false)])

  useEffect(() => {
    function getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
      } else {
        throw new Error('Geolocation is not supported by this browser.')
      }
    }

    function showPosition (position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    }

    getLocation()
  }, [])

  return { getWeatherApiLocation }
}
