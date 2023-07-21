const APY_KEY = '373a1d63c43d141d8f73c665454fac68'

// metric, standard

export async function WeatherApi (search, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=${units}&appid=${APY_KEY}`
    )
    const data = await response.json()

    const newWeather = getNewWeather(data)

    return newWeather
  } catch (error) {
    throw new Error('Error in WeatherApi')
  }
}

export async function WeatherApiLocation (lat, log, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${log}&units=${units}&appid=${APY_KEY}`
    )
    const data = await response.json()

    const newWeather = getNewWeather(data)

    return newWeather
  } catch (error) {
    throw new Error('Error in WeatherApi')
  }
}

const getNewWeather = (data) => {
  return [data].map((item) => ({
    city: item.city.name,
    temp: Math.round(item.list[0].main.temp),
    weatherDay: item.list[0].weather[0].description,
    speed: item.list[0].wind.speed,
    day: item.list[0].dt_txt.split(' ')[0],
    deg: item.list[0].wind.deg,
    humidity: item.list[0].main.humidity,
    visibility: item.list[0].visibility,
    airPressure: item.list[0].main.pressure,
    nextDays: item.list.map(
      (nextItem, index) =>
        index > 0 &&
        index < 6 && {
          next: nextItem.weather[0].description,
          day: nextItem.dt_txt.split(' ')[0],
          min: Math.round(nextItem.main.temp_min),
          max: Math.round(nextItem.main.temp_max)
        }
    )
  }))
}
