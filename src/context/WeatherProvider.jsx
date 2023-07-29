import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer
} from 'react'
import { getCity, getForecast, getWeather } from '../services/WeatherApi'

const WeatherContext = createContext()

export function useWeatherContext () {
  const context = useContext(WeatherContext)

  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider')
  }

  return context
}

export const initialStates = {
  isSearch: false,
  search: 'London',
  allWeather: [],
  city: [],
  forecast: [],
  loadingSearch: false,
  units: { unit: 'metric', symbol: '°C' },
  position: {
    latitude: 0,
    longitude: 0
  }
}

export const COMMENT_TYPES = {
  setIsSearch: 'setIsSearch',
  setSearch: 'setSearch',
  setWeather: 'setWeather',
  setCity: 'setCity',
  setForecast: 'setForecast',
  setUnits: 'setUnits',
  setPosition: 'setPosition'
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

  if (type === COMMENT_TYPES.setUnits) {
    return {
      ...state,
      units: payload
    }
  }

  if (type === COMMENT_TYPES.setPosition) {
    return {
      ...state,
      position: payload
    }
  }

  return { ...state }
}

export function WeatherProvider ({ children }) {
  const [
    {
      isSearch,
      search,
      allWeather,
      city,
      forecast,
      loadingSearch,
      units,
      position
    },
    dispatch
  ] = useReducer(reducer, initialStates)

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

  const setForecast = (payload) => {
    dispatch({ type: COMMENT_TYPES.setForecast, payload })
  }

  const saveUnits = (payload) => {
    dispatch({ type: COMMENT_TYPES.setUnits, payload })
  }

  const savePosition = (payload) => {
    dispatch({ type: COMMENT_TYPES.setPosition, payload })
  }

  const saveCity = async () => {
    const result = await getCity(search)

    setCity(result)
  }

  const saveWeather = async (lat, lon) => {
    const result = await getWeather(lat, lon, units.unit)

    setWeather(result)
    setIsSearch(false)
  }

  const saveForecast = async (lat, lon) => {
    const result = await getForecast(lat, lon, units.unit)

    setForecast(result)
  }

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
    saveCity()
  }, [])

  useMemo(() => {
    saveWeather(position.latitude, position.longitude)
    saveForecast(position.latitude, position.longitude)
  }, [units])

  return (
    <WeatherContext.Provider
      value={{
        isSearch,
        search,
        allWeather,
        city,
        loadingSearch,
        forecast,
        units,
        setIsSearch,
        setSearch,
        saveCity,
        saveWeather,
        saveForecast,
        saveUnits,
        savePosition,
        getGeoLocation
      }}>
      {children}
    </WeatherContext.Provider>
  )
}
