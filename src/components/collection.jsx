import React from 'react'

const collection = () => {
  return (

      <div className='p-6 md:p-10'>
        <h1 className='text-3xl  md:text-5xl font-bold mb-10  text-center'>Featured Collection</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
          <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHT37nTJxjWTsvCk1vM8v6eTh-wFrFOUBPFQ&s" alt="Product 1" className='w-full h-60 object-cover rounded-md mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Celesbial blossom</h2>
            <p className='text-gray-600 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam iste quas unde consequuntur harum rerum aperiam maiores esse id reiciendis?</p>
            <div className='flex justify-between items-center mt-auto' >
                <button className='bg-orange-500 text-white font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 bg-gradient-to-r from-orange-500  '> shop now</button>
                <button className='font-bold text-lg '> $250 </button>
            </div>
            
          </div>
          <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_majU_xr-TAhC2yQn-n3kCvgi_wwgrcVNUF643k_9v61K0gLDT_O2_s7gMXIY6Mt6KE&usqp=CAU" alt="Product 2" className='w-full h-60 object-cover rounded-md mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Noir Eloir</h2>
            <p className='text-gray-600 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam iste quas unde consequuntur harum rerum aperiam maiores esse id reiciendis?</p>
            <div className='flex justify-between items-center mt-auto' >
                <button className=' text-white font-bold py -2 px-6  duration-300 hover:scale-105 transition  rounded-full shadow-md bg-gradient-to-r from-orange-500 to-orange-400   '> shop now</button>
                <button className='font-bold  text-lg'> $299 </button>
            </div>
          </div>
          <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ony8haJVl7gHCVX1Tw2xPha3ZLZtwpSY2BqmdOCMTK1YBpZ7U1pO-oq6zRcclOiC53M&usqp=CAU" alt="Product 3"className='w-full h-60 object-cover rounded-md mb-4' />
          <h2 className='text-xl font-semibold  mb-2'>Mystic dawn</h2>
            <p className='text-gray-600 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam iste quas unde consequuntur harum rerum aperiam maiores esse id reiciendis?</p> 
            <div className='flex justify-between items-center mt-auto' >
                <button className='text-white font-bold py -2 px-6  duration-300 hover:scale-105 transition  rounded-full shadow-md bg-gradient-to-r from-orange-500 to-orange-400  '> shop now</button>
                <button className='font-bold text-lg '> $175 </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default collection
