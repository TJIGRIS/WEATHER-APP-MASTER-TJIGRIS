import { useEffect } from 'react'

export function useGeoLocation (saveWeather, saveForecast, savePosition) {
  const getGeoLocation = () => {
    if (!navigator.geolocation) {
      saveWeather(2.2582868, -77.2500906)
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords

        saveWeather(latitude, longitude)
        saveForecast(latitude, longitude)
        savePosition({ latitude, longitude })
      })
    }
  }

  useEffect(() => {
    getGeoLocation()
  }, [])

  return { getGeoLocation }
}
