import React from 'react'
const bgImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9woDYvZmwW2gwvgLBOTOZw8Ze06V5sqYouA&s"

const BannerImg = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
}
const Subscribe = () => {
  return (
    <div 
    className='bg-gray-100 mt-10 '
    style={BannerImg}
    data-aos= "zoom-in">
      
      <div className='container backdrop-blur-sm py-10'
                      data-aos= "zoom-in">
        <div className='space-y max-w-xl mx-auto'>
            <h1 className='text-2xl text-white text-center  sm:text-4xl font-semibold'>
                Get Notified About New Products
            </h1>
            <input type="text"
                    placeholder='Enter Your Email'
                    className='w-full p-3 mt-4 text-black' />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
