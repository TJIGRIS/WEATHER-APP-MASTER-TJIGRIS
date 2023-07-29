import { useReducer } from 'react'
import { COMMENT_TYPES, initialStates, reducer } from '../reducer/reducer'

export function useWeatherReducer () {
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

  return {
    isSearch,
    search,
    allWeather,
    city,
    forecast,
    loadingSearch,
    units,
    position,
    setIsSearch,
    setSearch,
    setCity,
    setWeather,
    setForecast,
    saveUnits,
    savePosition
  }
}
