import { createContext, useContext, useEffect, useReducer } from 'react'
import { getCity, getWeather } from '../services/WeatherApi'

const WeatherContext = createContext()

export function useWeatherContext () {
  const context = useContext(WeatherContext)

  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider')
  }

  return context
}

export const initianStates = {
  isSearch: false,
  search: 'London',
  allWeather: [],
  city: [],
  forecast: [],
  loadingSearch: false
}

export const COMMENT_TYPES = {
  setIsSearch: 'setIsSearch',
  setSearch: 'setSearch',
  setWeather: 'setWeather',
  setCity: 'setCity',
  setForecast: 'setForecast'
}

export const reducer = (state, action) => {
  const { type, payload } = action

  if (type === COMMENT_TYPES.setIsSearch) {
    return {
      ...state,
      isSearch: payload
    }
  }

  if (type === COMMENT_TYPES.setSearch) {
    return {
      ...state,
      search: payload
    }
  }

  if (type === COMMENT_TYPES.setWeather) {
    return {
      ...state,
      allWeather: payload,
      loadingSearch: true
    }
  }

  if (type === COMMENT_TYPES.setCity) {
    return {
      ...state,
      city: payload
    }
  }

  if (type === COMMENT_TYPES.setForecast) {
    return {
      ...state,
      forecast: payload
    }
  }

  return { ...state }
}

export function WeatherProvider ({ children }) {
  const [{ isSearch, search, allWeather, city, loadingSearch }, dispatch] =
    useReducer(reducer, initianStates)

  const setIsSearch = (payload) => {
    dispatch({ type: COMMENT_TYPES.setIsSearch, payload })
  }

  const setSearch = (payload) => {
    dispatch({ type: COMMENT_TYPES.setSearch, payload })
  }

  const setCity = (payload) => {
    dispatch({ type: COMMENT_TYPES.setCity, payload })
  }

  const setWeather = (payload) => {
    dispatch({ type: COMMENT_TYPES.setWeather, payload })
  }

  const saveCity = async () => {
    const result = await getCity(search)

    setCity(result)
  }

  const saveWeather = async (lat, lon) => {
    const result = await getWeather(lat, lon)

    setWeather(result)
    setIsSearch(!isSearch)
  }

  useEffect(() => {
    saveCity()
  }, [])

  return (
    <WeatherContext.Provider
      value={{
        isSearch,
        search,
        allWeather,
        city,
        loadingSearch,
        setIsSearch,
        setSearch,
        saveCity,
        saveWeather
      }}>
      {children}
    </WeatherContext.Provider>
  )
}
