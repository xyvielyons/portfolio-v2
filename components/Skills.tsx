import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSass } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { SiKubernetes } from "react-icons/si";
function Skills() {
  return (
    <div className='mx-2 mt-[8px]'>
        <div className="space-y-4 flex flex-col md:flex-row md:gap-4 w-full xl:gap-6">
            <div className="bg-coolGray10 py-4 px-4 rounded w-full mt-[16px]">
                <h1 className='font-bold text-coolGray800 text-[24px]'>Frontend Skills</h1>
                <div className="grid grid-rows-2 grid-cols-4 md:gap-4 ">
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><FaHtml5 className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Html</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><FaCss3 className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Css</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><SiJavascript className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Javascript</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><RiTailwindCssFill className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Tailwind</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><BiLogoSass className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Sass</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><FaBootstrap className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Bootstrap</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><SiAdobephotoshop className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Photoshop</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><CgFigma className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Figma</h1>
                    </div>

                </div>

            </div>

            <div className="bg-coolGray10 py-4 px-4 rounded w-full ">
                <h1 className='font-bold text-coolGray800 text-[24px]'>Backend Skills</h1>
                <div className="grid grid-rows-2 grid-cols-4 gap-4 mt-[8px]">
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><IoLogoNodejs className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Nodejs</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><SiExpress  className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Expressjs</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><SiMongodb className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Mongodb</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><SiPrisma className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Prisma</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><SiArduino className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Arduino</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><FaDocker className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Docker</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><RiFirebaseFill className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>Firebase</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[48px] h-[48px] flex items-center justify-center"><SiKubernetes className='w-[48px] h-[48px] text-coolGray800 '/></div>
                        <h1 className='text-[16px] font-bold text-coolGray600'>K8s</h1>
                    </div>

                </div>

            </div>
            
            
        </div>

    </div>
  )
}

export default Skills