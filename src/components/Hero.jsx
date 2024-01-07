import React from 'react'
import { Carousel } from "@material-tailwind/react";

export default function Hero() {
  return (
    <main className='h-screen w-screen bg-background flex items-center p-5'>
      <div className='w-7/12 flex flex-row items-center px-[90px]'>
        <div>
          {/* headline text */}
          <div>
            <p className='flex items-center text-brand font-medium text text-lg'>
              <span className='w-5 h-0.5 bg-brand block mr-[6px]'></span>
              Future Invesment
            </p>
            <h3 className='mt-3 font-extrabold text-[60px] leading-[70px] font-montserrat text-text-200'>
              Manage Your Finances Every Day <span className='text-brand'>Very Easily</span>
            </h3>
            <p className='mt-5 text-lg text-text-400'>Manage & develop your finances well for the future to come. Download now on your smartphone</p>
          </div>

          {/* app store and google play */}
          <div className='flex space-x-[30px] mt-[60px]'>
            <a href="/">
              <img src="images/appStore.svg" alt="" />
            </a>
            <a href="/">
              <img src="images/googlePlay.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className='w-5/12 h-3/4 bg-gray-200 rounded-[30px] py-5'>
        <Carousel className="rounded-xl">
          <img
            src="images/iphone-12-mini--black1.png"
            alt="image 1"
            className="h-full w-full object-contain"
          />
          <img
            src="images/iphone-12-mini--black2.png"
            alt="image 2"
            className="h-full w-full object-contain"
          />
          <img
            src="images/iphone-12-mini--black3.png"
            alt="image 3"
            className="h-full w-full object-contain"
          />
        </Carousel>
      </div>
    </main>
  )
}
