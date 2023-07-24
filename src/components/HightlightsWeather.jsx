import { LiaLocationArrowSolid } from 'react-icons/lia'

export function HightlightsWeather () {
  return (
    <section className='mt-[72px] '>
      <h2 className='text-[24px] font-bold'>Today´s Highlights</h2>

      <div className='grid grid-cols-layout-alt gap-[48px] mt-[32px]'>
        <article className='flex flex-col items-center justify-between p-[16px] bg-primary'>
          <h3>Wind status</h3>

          <div>
            7<span>mph</span>
          </div>

          <div className='flex justify-between w-[90px]'>
            <div>
              <LiaLocationArrowSolid />
            </div>
            <p>WSW</p>
          </div>
        </article>

        <article className='flex flex-col items-center justify-between p-[16px] bg-primary'>
          <h3>Humidity</h3>

          <div>
            84<span>%</span>
          </div>

          <div className='flex justify-between w-[90px]'>
            <div>
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </div>
            <input type='range' />
            <p>%</p>
          </div>
        </article>

        <article className='flex flex-col items-center justify-between p-[16px] bg-primary'>
          <h3>Visibility</h3>

          <div className='text-[64px]'>
            6,4<span className='text-[32px]'>miles</span>
          </div>
        </article>

        <article className='flex flex-col items-center justify-between p-[16px] bg-primary'>
          <h3>Air Pressure</h3>

          <div className='text-[64px]'>
            998<span className='text-[32px]'>mb</span>
          </div>
        </article>
      </div>
    </section>
  )
}
