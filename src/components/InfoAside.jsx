import { Shower } from '../assets/Img'
import { MdLocationOn } from 'react-icons/md'

export function InfoAside () {
  return (
    <main className='grow w-full flex flex-col items-center'>
      <picture className='relative w-full h-72 my-10 grid place-items-center'>
        <div className='absolute bg-cloud-background w-full h-full bg-cover bg-no-repeat bg-center opacity-5'></div>

        <img src={Shower} alt='' />
      </picture>

      <section className='grow flex flex-col justify-between items-center text-center'>
        <div className='flex items-end'>
          <h1 className='text-[144px]'>15</h1>
          <span className='text-[50px] text-accent mb-8'>°C</span>
        </div>

        <h2 className='text-[36px] text-text-alt font-semibold'>Shower</h2>

        <div className='flex flex-col items-center text-accent text-[18px]'>
          <div className='flex items-center gap-2 mb-[32px]'>
            <p>Today</p>
            <span>-</span>
            <p>Fri. 5 Jun</p>
          </div>

          <div className='flex items-center gap-2 font-semibold'>
            <MdLocationOn />
            <p>London</p>
          </div>
        </div>
      </section>
    </main>
  )
}
