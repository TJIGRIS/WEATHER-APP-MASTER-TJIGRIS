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
