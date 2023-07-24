export function ButtonsMain () {
  const styles = '!bg-text text-black'

  return (
    <header className='flex justify-between items-center'>
      <div></div>

      <div className='flex gap-3 font-bold text-[18px] [&>button]:w-[40px] [&>button]:h-[40px] [&>button]:rounded-full [&>button]:bg-accent'>
        <button className={styles}>°C</button>
        <button>°F</button>
      </div>
    </header>
  )
}
