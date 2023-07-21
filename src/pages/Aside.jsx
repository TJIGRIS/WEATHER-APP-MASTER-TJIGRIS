import { img } from '../assets/Img'
import SearchWeather from '../components/SearchWeather'
import { useWeatherContext } from '../context/WeatherContexProvider'
import { ImLocation } from 'react-icons/im'

export function Aside () {
  const { weather, units, toogle } = useWeatherContext()

  /* const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  }; */

  return (
    <aside className='w-[459px] min-h-screen bg-primary p-[32px] flex flex-col justify-between'>
      <SearchWeather />

      {toogle === false && (
        <>
          <picture className='relative grid place-items-center h-[250px]'>
            <div className='absolute w-full h-full bg-cloud-background bg-no-repeat bg-contain opacity-10'></div>
            <img className='' src={img[weather[0]?.weatherDay]} alt='' />
          </picture>

          <section className='h-[500px] flex flex-col justify-between'>
            <div className='flex justify-center items-end text-[144px]'>
              <p>{weather[0]?.temp}</p>
              <span className='text-[50px] text-accent -translate-y-10'>
                {units.symbol}
              </span>
            </div>

            <div>
              <p className='text-center text-[36px] text-accent font-semibold'>
                {weather[0]?.weatherDay}
              </p>
            </div>

            <div>
              <p className='text-center text-[18px] text-accent mb-[32px]'>
                {weather[0]?.day}
              </p>

              <div className='flex items-center justify-center gap-2 text-accent text-[18px] font-semibold'>
                <span>
                  <ImLocation size={24} />
                </span>
                <p>{weather[0]?.city}</p>
              </div>
            </div>
          </section>
        </>
      )}
    </aside>
  )
}
