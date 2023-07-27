const API_KEY = '373a1d63c43d141d8f73c665454fac68'

export const getCity = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
  )
  const data = await response.json()

  return data
}

export const getWeather = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  )
  const data = await response.json()

  return data
}
