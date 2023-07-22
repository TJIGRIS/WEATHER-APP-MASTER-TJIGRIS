import { InfoAside } from '../components/InfoAside'
import { SearchCity } from '../components/SearchCity'

export function AsideWeather () {
  return (
    <aside className='w-[459px] py-[42px] bg-primary h-[100vh] flex flex-col justify-between items-center'>
      <SearchCity />
      <InfoAside />
    </aside>
  )
}
