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
