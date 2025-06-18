import React from 'react'

const About = () => {
    return (
        <div className='flex  flex-col md:flex-row p-10 md:p-20 m-4 bg-black text-white items-center gap-10'>
            <div className='w-full flex  justify-center relative md:w-1/2 mb-8 md:mb-0 '>
                <img src="https://img.freepik.com/premium-photo/two-black-perfume-bottles-black-background-mockup-black-perfume-bottle_153090-263.jpg"  alt="" />
            </div>
            <div className='
      flex flex-col justify-center items-start md:w-1/2 space-y-6 w-full'>
                <h1 className=' text-red-600 font-bold text-5xl sm:text-6xl md:text-7xl'>About us</h1>
                <h2 className='text-pink-300 text-2xl sm:text-3xl'>"Our Legacy Of Luxury</h2>
                <p className='text-gray-600 sm:text-lg text-base font-serif font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptate, cupiditate maiores porro corporis voluptatum officia asperiores quo vitae. Magni, beatae totam vero eum nemo aspernatur quas consequatur hic assumenda eveniet aperiam fuga quidem earum soluta a incidunt tempora. Repellat?</p>

                <button className='bg-lime-50 text-red-400 hover:bg-amber-300 px-6   py-2 rounded-2xl '>learn more</button>
            </div>
        </div>
    )
}

export default About
