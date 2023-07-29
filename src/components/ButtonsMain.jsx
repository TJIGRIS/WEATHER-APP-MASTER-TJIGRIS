import { useWeatherContext } from '../context/WeatherProvider'

export function ButtonsMain () {
  const { units, saveUnits } = useWeatherContext()

  const changeUnitsMetric = () => {
    saveUnits({ unit: 'metric', symbol: '°C' })
  }

  const changeUnitsStandard = () => {
    saveUnits({ unit: 'standard', symbol: '°F' })
  }

  const styles = '!bg-text text-black'

  return (
    <header className='flex justify-between items-center mb-5'>
      <div></div>

      <div className='flex gap-3 font-bold text-[18px] [&>button]:w-[40px] [&>button]:h-[40px] [&>button]:rounded-full [&>button]:bg-accent'>
        <button
          className={units.unit === 'metric' ? styles : ''}
          onClick={units.unit === 'standard' ? changeUnitsMetric : null}>
          °C
        </button>
        <button
          className={units.unit === 'standard' ? styles : ''}
          onClick={units.unit === 'metric' ? changeUnitsStandard : null}>
          °F
        </button>
      </div>
    </header>
  )
}
