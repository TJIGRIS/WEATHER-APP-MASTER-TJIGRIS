import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export function SearchCityView () {
  return (
    <section className='hidden'>
      <div className='relative flex justify-between items-center mt-7 mb-7'>
        <button className='absolute bottom-16 right-0'>
          <AiOutlineClose size={24} />
        </button>

        <form>
          <input
            className='w-full h-10 bg-accent outline-none px-[20px] text-white placeholder:text-white transition-colors duration-300 ease-linear'
            type='text'
            placeholder='Search for places'
          />
        </form>

        <button className='w-min h-10 px-5 bg-link grid place-items-center text-white hover:bg-background-alt transition-colors duration-300 ease-linear'>
          Search
        </button>
      </div>

      <ul>
        <li className='group'>
          <button className='w-full h-16 flex items-center justify-between text-left py-3 px-5 text-text transition-colors border-[1px] border-primary group-hover:border-accent duration-300 ease-linear text-[16px]'>
            London
            <MdOutlineKeyboardArrowRight
              size={24}
              className='fill-accent opacity-0 duration-300 ease-linear group-hover:opacity-100'
            />
          </button>
        </li>
      </ul>
    </section>
  )
}
