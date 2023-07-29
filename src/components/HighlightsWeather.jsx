import { TbLocationFilled } from 'react-icons/tb'
import { useWeatherContext } from '../context/WeatherProvider'

export function HighlightsWeather () {
  const { allWeather } = useWeatherContext()

  return (
    <section>
      <h2 className='text-[24px] font-bold'>Today´s Highlights</h2>

      <div className='grid grid-cols-layout-alt gap-[48px] mt-[32px]'>
        <article className='flex flex-col items-center justify-between p-[16px] bg-primary'>
          <h3>Wind status</h3>

          <div className='text-[64px] my-[12px]'>
            {allWeather[0]?.wind.speed}
            <span className='text-[32px] ml-4'>mph</span>
          </div>

          <div className='flex justify-between items-center w-[90px]'>
            <div className='w-[29px] h-[29px] rounded-full bg-accent grid place-items-center'>
              <TbLocationFilled
                color='#fff'
                style={{
                  transform: `rotate(-${allWeather[0]?.wind.deg}deg) rotate(45deg)`
                }}
                size={17}
              />
            </div>
            <p>WSW</p>
          </div>
        </article>

        <article className='flex flex-col items-center justify-between p-[16px] bg-primary'>
          <h3>Humidity</h3>

          <div className='text-[64px] my-[13px]'>
            {allWeather[0]?.humidity}
            <span className='text-[40px]'>%</span>
          </div>

          <div className='flex flex-col justify-between w-[320px] text-text-alt'>
            <div className='flex justify-between'>
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </div>
            <input
              type='range'
              className='w-full bg-secondary'
              min={0}
              max={100}
              value={allWeather[0]?.humidity}
            />
            <p className='ml-auto'>%</p>
          </div>
        </article>

        <article className='flex flex-col items-center justify-between p-[16px] bg-primary'>
          <h3>Visibility</h3>

          <div className='text-[64px]'>
            {Math.trunc(allWeather[0]?.visibility / 1609)}
            <span className='text-[32px] ml-4'>miles</span>
          </div>
        </article>

        <article className='flex flex-col items-center justify-between p-[16px] bg-primary'>
          <h3>Air Pressure</h3>

          <div className='text-[64px]'>
            {allWeather[0]?.pressure}
            <span className='text-[32px] ml-4'>mb</span>
          </div>
        </article>
      </div>
    </section>
  )
}
