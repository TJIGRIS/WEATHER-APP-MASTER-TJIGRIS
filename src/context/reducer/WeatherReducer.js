export const initialState = {
  weather: [],
  search: '',
  loading: false,
  inicial: true,
  toogle: false,
  units: { name: 'metric', symbol: '°C' },
  location: {
    latitude: 0,
    longitude: 0
  }
}

export const TYPES_COMMANDS = {
  setWeather: 'SET_WEATHER',
  setSearch: 'SET_SEARCH',
  setLocation: 'SET_LOCATION',
  setToogle: 'SET_TOOGLE',
  setUnits: 'SET_UNITS',
  setInicial: 'SET_INICIAL'
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

  if (type === TYPES_COMMANDS.setToogle) {
    return {
      ...state,
      toogle: payload
    }
  }

  if (type === TYPES_COMMANDS.setLocation) {
    return {
      ...state,
      location: payload
    }
  }

  if (type === TYPES_COMMANDS.setUnits) {
    return {
      ...state,
      units: payload
    }
  }

  if (type === TYPES_COMMANDS.setInicial) {
    return {
      ...state,
      inicial: payload
    }
  }

  return state
}
