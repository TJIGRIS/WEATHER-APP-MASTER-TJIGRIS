import { DayWeek } from '../components/DayWeek'
import { useWeatherContext } from '../context/WeatherContexProvider'
import { TbLocationFilled } from 'react-icons/tb'

export function MainWeather () {
  const { weather } = useWeatherContext()

  const next = weather[0]?.nextDays

  return (
    <main className='w-[981px] mx-auto p-[42px] flex flex-col justify-start items-center'>
      <section className='w-full flex justify-between mb-[66px]'>
        <div></div>
        <div className='[&>button]:rounded-full [&>button]:w-[40px] [&>button]:h-[40px] [&>button]:bg-text [&>button]:text-black [&>button]:font-bold [&>button]:text-[18px]  flex gap-[12px] '>
          <button>°C</button>
          <button>°F</button>
        </div>
      </section>

      <section className='w-full grid grid-cols-layout place-items-center gap-10'>
        {next?.map(
          (item, index) => item.next && <DayWeek key={index} {...item} />
        )}
      </section>

      <h2 className='text-left w-full mt-[72px] text-[24px] font-bold mb-[32px]'>
        Today´s Hightlights
      </h2>

      <section className='w-full grid grid-cols-layout-alt gap-[48px] [&>article]:bg-primary [&>article]:flex [&>article]:flex-col [&>article]:justify-between [&>article]:items-center  [&>article]:p-[22px] [&>article>div]:text-[64px]'>
        <article>
          <h3>Wind Status</h3>
          <div>{weather[0]?.speed} mph</div>

          <TbLocationFilled />
        </article>

        <article>
          <h3>Humidity</h3>
          <div className='flex'>
            <p>{weather[0]?.humidity}</p>
            <span>%</span>
          </div>
          <div className='w-full flex justify-between !text-[12px]'>
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <input
            className='w-full'
            type='range'
            defaultValue={weather[0]?.humidity}
          />
          <div className='w-full text-accent flex justify-between !text-[12px]'>
            <span></span>
            <span>%</span>
          </div>
        </article>

        <article>
          <h3>Visibility</h3>
          <div>{weather[0]?.visibility} miles</div>
        </article>

        <article>
          <h3>Air pressure</h3>
          <div>{weather[0]?.airPressure} mb</div>
        </article>
      </section>
    </main>
  )
}
