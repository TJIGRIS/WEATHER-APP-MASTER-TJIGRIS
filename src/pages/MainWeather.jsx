import { ButtonsMain } from '../components/ButtonsMain'
import { DaysWeather } from '../components/DaysWeather'
import { HighlightsWeather } from '../components/HighlightsWeather'

export function MainWeather () {
  return (
    <div className='px-[16px] 2xl:px-[50px] 3xl:px-[150px] 4xl:px-[250px] py-[22px] w-full'>
      <section className='flex flex-col justify-between h-full'>
        <ButtonsMain />

        <main className='flex flex-col gap-[42px]'>
          <DaysWeather />
          <HighlightsWeather />
        </main>

        <footer>
          <p className='text-center mt-10 3xl:mt-5 4xl:mt-0 text-text-alt'>
            created by <span className='underline text-text'>TJIGRIS</span> -
            devChallenges.io
          </p>
        </footer>
      </section>
    </div>
  )
}
