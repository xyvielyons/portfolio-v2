import React from 'react'
import Image from 'next/image'
export default function Process() {
  return (
    <div className='mx-2 mt-[16px]'>
      <div className="flex flex-col items-center">
        <h1 className='text-coolGray800 text-[32px] font-bold'>How it works?</h1>
        <p className='text-coolGray600 text-[16px]'>It couldn’t be any easier ....</p>
      </div>
      <div className="space-y-2 mt-2 xl:space-y-4">
        <div className="space-y-2 flex flex-col md:flex-row md:gap-4 xl:gap-6">
          <div className="flex flex-row bg-coolGray10 rounded px-4 py-4 md:w-1/2 md:mt-[8px]">
            <div className="relative space-y-4 p-2">
              <h1 className='text-[24px] font-bold text-coolGray800 z-50'>Discovery & Research</h1>
              <p>We begin by collaborating to understand your vision and target audience. This includes client interviews, user research, and competitor analysis </p>
              <div className='text-[42px] font-bold text-coolGray600 absolute top-0 right-1'>1</div>
            </div>
            <div className=''>
              <Image className="h-full max-w-32" src='/picture1.jpg' alt='image' width={1200} height={768}></Image>
            </div>
          </div>
          <div className="flex flex-row bg-coolGray10 rounded px-4 py-4 md:w-1/2">
            <div className="relative p-2 space-y-4">
              <h1 className='text-[24px] font-bold text-coolGray800 z-50'>Strategy & Planning</h1>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>We define your website's purpose, user journey, and content structure for optimal user experience</p>
              <div className='text-[42px] font-bold text-coolGray600 absolute top-0 right-1'>2</div>
            </div>
            <div className=''>
              <Image className="h-full max-w-32" src='/picture2_page-0001.jpg' alt='image' width={1200} height={768}></Image>
            </div>
          </div>

        </div>
        <div className="space-y-2 flex flex-col md:flex-row md:gap-4 xl:space-y-4 xl:gap-6">
          <div className="flex flex-row bg-coolGray10 rounded px-4 py-4 md:w-1/2 md:mt-[16px]">
            <div className="relative p-2 space-y-4">
              <h1 className='text-[24px] font-bold text-coolGray800 z-50'>Design & Prototyping</h1>
              <p>We translate your vision into user-friendly interfaces through wireframes, mockups, and user testing for a polished look and feel</p>
              <div className='text-[42px] font-bold text-coolGray600 absolute top-0 right-1'>3</div>
            </div>
            <div className=''>
              <Image className="h-full max-w-32" src='/picture3_page-0001.jpg' alt='image' width={1200} height={768}></Image>
            </div>
          </div>
          <div className="flex flex-row bg-coolGray10 rounded px-4 py-4 md:w-1/2">
            <div className="relative space-y-4">
              <h1 className='text-[24px] font-bold text-coolGray800 '>Development & Implementation</h1>
              <p>We bring your website to life with clean code, ensuring a seamless experience across all devices</p>
              <div className='text-[42px] font-bold text-coolGray600 absolute top-0 right-1'>4</div>
            </div>
            <div className=''>
              <Image className="h-full max-w-32" src='/picture4_page-0001.jpg' alt='image' width={1200} height={768}></Image>
            </div>
          </div>

        </div>
         <div className="flex flex-row bg-coolGray10 rounded px-4 py-4 md:w-1/2">
            <div className="relative p-2 space-y-4">
              <h1 className='text-[24px] font-bold text-coolGray800 z-50'>Launch & Maintenance</h1>
              <p>We launch your website smoothly and offer ongoing maintenance or support</p>
              <div className='text-[42px] font-bold text-coolGray600 absolute top-0 right-1'>5</div>
            </div>
            <div className=''>
              <Image className="h-full max-w-32" src='/picture5_page-0001.jpg' alt='image' width={1200} height={768}></Image>
            </div>
          </div>
      


      </div>
    </div>
  )
}
