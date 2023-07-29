import { getDataForecast } from './InfoDate'

const API_KEY = '373a1d63c43d141d8f73c665454fac68'

export const getCity = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
  )
  const data = await response.json()

  return data
}

export const getWeather = async (lat, lon, units) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
  )
  const data = await response.json()

  const newData = [data].map((item) => ({
    name: item.name,
    weather: item.weather[0].main,
    main: Math.round(item.main.feels_like),
    description: item.weather[0].description,
    visibility: item.visibility,
    humidity: item.main.humidity,
    pressure: item.main.pressure,
    wind: {
      speed: item.wind.speed,
      deg: item.wind.deg
    }
  }))

  return newData
}

export const getForecast = async (lat, lon, units) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
  )

  const data = await response.json()

  if (data.cod !== '200') return console.log(data.message)

  const { list } = data

  const uniqueDatesMap = {}

  list.forEach((item, index) => {
    const date = item.dt_txt.split(' ')[0]

    if (!uniqueDatesMap[date]) {
      uniqueDatesMap[date] = {
        dt_txt:
          index === 0 ? 'Tomorrow' : getDataForecast(item.dt_txt.split(' ')[0]),
        description: item.weather[0].description,
        temp_min: Math.round(item.main.temp_min),
        temp_max: Math.round(item.main.temp_max)
      }
    }
  })

  return Object.entries(uniqueDatesMap).map(([key, val]) => val)
}
