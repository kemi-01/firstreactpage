import React from 'react'

const Purity = () => {
  return (
    <div className='flex  flex-col md:flex-row p-10 md:p-20 m-4  items-center gap-10'>
      <div className='w-full flex  justify-center relative md:w-1/2 mb-8 md:mb-0 '>
                <img src="https://img.freepik.com/premium-photo/two-black-perfume-bottles-black-background-mockup-black-perfume-bottle_153090-263.jpg"  alt="" />
            </div>
            <div className='
      flex flex-col justify-center items-start md:w-1/2 space-y-6 w-full'>
                <h1 className=' text-black font-bold text-3xl '>A commitment to purity</h1>
                <p className='text-gray-600 sm:text-lg text-base font-serif font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quis. Voluptatem odio cupiditate delectus maxime sit repellendus aliquam dignissimos unde fugit dolorem velit, pariatur eveniet nostrum tempora distinctio. Distinctio ut nostrum soluta deleniti omnis debitis suscipit, natus neque facilis ducimus at molestias minima consequuntur, sunt placeat delectus ipsam id autem!</p>

                <button className='bg-black text-white hover:bg-amber-300 px-6   py-2 rounded-2xl '>learn more</button>
            </div>
    </div>
  )
}

export default Purity
