import React from 'react'

const Foot = () => {
  return (
    <>
    <div className='shadow-2xl flex justify-between mt-3 bg-blue-50 '>
        <div className="">
          <div className="flex tracking-normal">
            <span>
              <h3 className="font-serif font-bold ml-4">Training</h3>
            </span>
            <span>
              <h3 className="text-red-600 font-serif font-bold">Blog</h3>
            </span>
          </div>
          <p className='ml-4 font-serif'>
            Welcome to our technical blog, where we delve</p>
            <p className='ml-4 font-serif'> into the world of cutting-edge technologies </p>
            <p className='ml-4 font-serif'>and explore their practical applications.</p>
          
        </div>
        <div className='font-serif'>
        <h3 className='font-bold  font-serif'>CATEGORY</h3>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React JS</li>
        </ul>
        </div>
        <div className="font-serif">
          <h3 className="font-bold">GET IN TOUCH</h3>
          <ul>
            <li>+91-8XXX-XXX-XX</li>
            <li>srs2504@gmail.com</li>
          </ul>
        </div>
        <div className='font-serif'>
        <h3 className='font-bold mr-4'>FOLLOW US</h3>
        <div className='flex justify-between mr-4'>
        
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        
        </div>
        </div>

    </div>
    <hr/>
    <div className="flex justify-between mt-4 font-serif font-semibold">
        <p className='ml-4'>© 2024 REACT-WITH-SIMAR</p>
        <p className='mr-4'>MADE WITH ❤️ By Simar</p>
      </div>
    </>
    
  )
}

export default Foot