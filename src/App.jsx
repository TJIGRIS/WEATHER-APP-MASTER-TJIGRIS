import { AsideWeather } from './pages/AsideWeather'
import { MainWeather } from './pages/MainWeather'

function App () {
  return (
    <div className='min-h-screen flex lg:flex-row flex-col bg-background text-text font-raleway font-medium'>
      <AsideWeather />
      <MainWeather />
    </div>
  )
}

export default App
