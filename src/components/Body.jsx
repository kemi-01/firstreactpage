import React from 'react'

const Body = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center p-8 m-4 space-y-8 md:space-y-0 md:space-x-4 bg-white '>
            <div className='md:w-1/2  '>
                <h1 className='text-3xl  md:text-4xl font-serif font-bold text-gray-900 mb-4'> A SYMPHONY OF SCENT</h1>
                <p className='text-gray-600 mb-6 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, corporis explicabo. Beatae saepe, illo molestiae excepturi odit ducimus repellendus ex corrupti explicabo at neque placeat iure dolorum sapiente. Qui provident, eius deserunt dolorem eum soluta accusantium odio impedit accusamus? Cum nesciunt accusamus vel, mollitia a quibusdam suscipit incidunt temporibus numquam.</p>


                <div className='flex  flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
                    <button className='bg-orange-500 hover:bg-amber-600 text-white py-2 px-4 rounded'>SHOP NOW</button>
                    <button className='bg-black text-white py-2 px-4 rounded hover:bg-gray-800'>VIEW DETAILS</button>
                </div>
            </div>
            <div className='flex justify-center relative w-full md:w-1/2'>
                <img src="https://img.freepik.com/premium-photo/bottle-red-color-perfume-isolated-white-background_250899-387.jpg" alt="perfume" />
                <span className=' bg-orange-500 text-white py-1 px-3 absolute top-4 left-1/4 transform -translate-x-1/2 md:left-24 md:translate-x-0'>30% off</span>
            </div>
        </div >
    )
}

export default Body
