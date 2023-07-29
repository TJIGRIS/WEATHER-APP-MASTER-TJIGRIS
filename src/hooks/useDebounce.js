import { useEffect, useState } from 'react'

export function useDebounce (city, delay = '350') {
  const [search, setSearch] = useState(city)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(city)
    }, delay)

    return () => clearTimeout(timer)
  }, [city, delay])

  return search
}
