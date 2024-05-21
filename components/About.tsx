import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className='mx-2 space-y-4'> 
        <div className="w-full flex justify-center mt-4">
            <h1 className='text-[32px] font-bold text-coolGray800'>About</h1>
        </div>

        <div className="bg-coolGray10 px-4 py-4 rounded relative">
            <div className="flex flex-row w-full mb-[8px]">
                <div className="max-w-56 h-full">
                    <Image className='h-[300px] rounded' src="/profile2.png" alt="profile picture" width={1200} height={768}></Image>
                </div>
                <div className="w-full flex items-end mx-2 my-2 mb-4">
                    <div className="">
                        <h1 className='leading-4 text-[14px] font-medium text-coolGray600'>web developer and ux/ui designer</h1>
                        <div className="border-accentColor border-2 w-[48px] bg-accentColor"></div>
                    </div>
                </div>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 font-bold absolute text-[24px] w-[180px] top-10 left-44">Creativity, passion and a lot of coffee</h1>
            </div>
            <div className="">
                <h1 className='text-[18px] text-coolGray800 font-bold'>Xyvie Lyons</h1>
                <p className='text-[14px] text-coolGray600 font-medium' >xyvielyons@gmail.com</p>
            </div>
            
            <div className=""></div>
        </div>

        <div className="bg-coolGray10 px-4 py-4 rounded space-y-4">
            <h1 className="text-[32px] font-bold leading-8 text-coolGray800">Crafting Seamless User Journeys.</h1>
            <p className="text-[16px] font-normal text-coolGray700">I'm a multifaceted web professional with expertise in both UI/UX design and full-stack development. I leverage this combined skillset to translate user needs into intuitive and visually captivating digital experiences.  My passion lies in crafting seamless user journeys, meticulously designing interfaces, and building robust backend infrastructure to ensure flawless functionality.</p>
            <p className='text-[16px] font-normal text-coolGray700'>Ready to collaborate on your next project? Let's build something remarkable.</p>
            <div className="w-[266px] h-[88.89px]">
                <Image src="/signature.svg" alt='signature' width={1600} height={1200}></Image>
            </div>
        </div>


    </div>
  )
}

export default About