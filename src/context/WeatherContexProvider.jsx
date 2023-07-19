import { createContext, useContext, useEffect, useReducer } from 'react'
import { WeatherApi, WeatherApiLocation } from '../services/WeatherApi'

const AuthContext = createContext()

export function useWeatherContext () {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      'useWeatherContext must be used within a WeatherContextProvider'
    )
  }

  return context
}

export const initialState = {
  weather: [],
  search: '',
  location: {
    latitude: 0,
    longitude: 0
  }
}

export const TYPES_COMMANDS = {
  setWeather: 'SET_WEATHER',
  setSearch: 'SET_SEARCH',
  setLocation: 'SET_LOCATION'
}

export const reducer = (state, action) => {
  const { type, payload } = action

  if (type === TYPES_COMMANDS.setWeather) {
    return {
      ...state,
      weather: payload
    }
  }

  if (type === TYPES_COMMANDS.setSearch) {
    return {
      ...state,
      search: payload
    }
  }

  if (type === TYPES_COMMANDS.setLocation) {
    return {
      ...state,
      location: payload
    }
  }

  return state
}

export function useSearch (setWeather) {
  const { search, setSearch } = useWeatherReducer()

  const getWeather = async () => {
    if (search === '' || search === undefined || search === null) return

    const weatherApi = await WeatherApi(search)

    setWeather(weatherApi)
  }
  const changeSearch = (city) => {
    setSearch(city)
  }
  return { search, getWeather, changeSearch }
}

function useWeatherReducer () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setWeather = (payload) => {
    dispatch({ type: TYPES_COMMANDS.setWeather, payload })
  }

  const setSearch = (payload) => {
    dispatch({ type: TYPES_COMMANDS.setSearch, payload })
  }

  const setLocation = (payload) => {
    dispatch({ type: TYPES_COMMANDS.setLocation, payload })
  }

  return { ...state, setWeather, setLocation, setSearch }
}

export function WeatherContextProvider ({ children }) {
  const { weather, location, setWeather, setLocation } = useWeatherReducer()

  const { search, getWeather, changeSearch } = useSearch(setWeather)

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

  return (
    <AuthContext.Provider value={{ weather, search, changeSearch, getWeather }}>
      {children}
    </AuthContext.Provider>
  )
}
