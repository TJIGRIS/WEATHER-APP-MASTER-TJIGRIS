import { createContext, useContext } from 'react'

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
  search: '',
  weather: []
}

export const COMMENT_TYPES = {
  setIsSearch: 'setIsSearch'
}

export const reducer = (state, action) => {
  const { type, payload } = action

  if (type === COMMENT_TYPES.setIsSearch) {
    return {
      ...state,
      isSearch: payload
    }
  }
}

export function WeatherProvider ({ children }) {
  return (
    <WeatherContext.Provider value={{}}>
      {children}
    </WeatherContext.Provider>
  )
}
