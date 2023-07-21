import { useReducer } from 'react'
import {
  TYPES_COMMANDS,
  initialState,
  reducer
} from '../context/reducer/WeatherReducer'

export function useWeatherReducer () {
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

  const setToogle = (payload) => {
    dispatch({ type: TYPES_COMMANDS.setToogle, payload })
  }

  const setUnits = (payload) => {
    dispatch({ type: TYPES_COMMANDS.setUnits, payload })
  }

  const setInicial = (payload) => {
    dispatch({ type: TYPES_COMMANDS.setInicial, payload })
  }

  return {
    ...state,
    setWeather,
    setLocation,
    setSearch,
    setToogle,
    setUnits,
    setInicial
  }
}
