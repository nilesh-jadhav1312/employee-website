import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
         <h1 className='text-2xl' >Hello <br/><span className='text-3xl font-semibold'>Nilesh</span>  </h1>
         <button className='bg-red-500 text-white px-5 py-3 rounded-lg font-bold'>Log Out </button>

    </div>
  )
}

export default Header