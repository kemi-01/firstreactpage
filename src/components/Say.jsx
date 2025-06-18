import React from 'react'

const Say = () => {
    return (
        <div className='w-full p-6 md:p-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10    '>

                {/* LEFT: images */}
                <div className='grid grid-cols-2 gap-4  '>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ony8haJVl7gHCVX1Tw2xPha3ZLZtwpSY2BqmdOCMTK1YBpZ7U1pO-oq6zRcclOiC53M&usqp=" className='rounded-lg w-full h-auto object-cover' alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ony8haJVl7gHCVX1Tw2xPha3ZLZtwpSY2BqmdOCMTK1YBpZ7U1pO-oq6zRcclOiC53M&usqp=" className='rounded-lg w-full h-auto object-cover' alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ony8haJVl7gHCVX1Tw2xPha3ZLZtwpSY2BqmdOCMTK1YBpZ7U1pO-oq6zRcclOiC53M&usqp=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ony8haJVl7gHCVX1Tw2xPha3ZLZtwpSY2BqmdOCMTK1YBpZ7U1pO-oq6zRcclOiC53M&usqp=" className='rounded-lg w-full h-auto' alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ony8haJVl7gHCVX1Tw2xPha3ZLZtwpSY2BqmdOCMTK1YBpZ7U1pO-oq6zRcclOiC53M&usqp=" rounded-lg w-full h-auto object-cover alt="" />
                </div>

                {/* RIGHT: text */}
                <div className=' space-y-6 grid grid-cols-2 gap-6 text-gray-700 text-sm '>
                    <div>
                        <h4 className='font-bold text-gray-900  mb-1'>Artistic Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <h4 className='font-bold text-gray-900 mb-1'>Organic ingredients</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div>
                        <h4 className='font-bold text-gray-900 mb-1'>Exclusive selections</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                    <div>
                        <h4 className='font-bold text-gray-900'>Scent</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Say
