import React from 'react'

const Header = () => {
  return (
    <div className='flex  flex-col md:flex-row items-center justify-between md:space-y-0  space-y-4 p-5 m-4' >
      <h1 className='text-lg font-bold '>Odore.perta</h1>
      <ul className='flex  flex-wrap justify-center md:justify-start space-x-4 ml-4 text-lg font-bold'>
        <li className='text-red-500'><a href="/">Home</a></li>
        <li><a href="/collection">Collection</a></li>
        <li><a href="/deals">Deals</a></li>
        <li><a href="/reviews">Reviews</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
        <input type="text" placeholder="Search... " className='border border-gray-300 rounded px-3 py-1 w-full md:w-60' />
    </div>
  )
}

export default Header
