import { ButtonsMain } from '../components/ButtonsMain'
import { DaysWeather } from '../components/DaysWeather'
import { HightlightsWeather } from '../components/HightlightsWeather'

export function MainWeather () {
  return (
    <div className='p-[42px] w-full'>
      <section className='flex flex-col justify-between h-full'>
        <ButtonsMain />

        <main className='flex flex-col gap-[42px]'>
          <DaysWeather />
          <HightlightsWeather />
        </main>

        <footer>
          <p className='text-center text-text-alt'>
            created by <span className='underline text-text'>TJIGRIS</span> -
            devChallenges.io
          </p>
        </footer>
      </section>
    </div>
  )
}
