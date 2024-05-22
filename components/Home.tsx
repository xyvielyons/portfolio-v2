import React from 'react'
import Image from 'next/image'
import { IoDocument } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {Button} from "@nextui-org/react";
import { FaLocationArrow } from "react-icons/fa6";
export default function HomePage() {
  return (
    <div className="Home px-4 py-4" id="Home">
        <div className='maincontainer1 flex flex-col md:flex-row md:gap-4 xl:gap-6'>
            <div className="container1 mb-6 md:p-6 md:space-y-6">
                    <div className="mb-4 ">
                        <p className='text-coolGray600 text-[20px] font-[500]'>Hello 👋</p>
                        <p className='text-coolGray600 text-[20px] font-[500] mb-2'>I’m Xyvie Lyons</p>
                        <h1 className='text-coolGray800 font-[800] text-[32px] leading-8'>UX/UI designer and Fullstack Web Developer</h1>
                    </div>
                

                    <div className="flex flex-row space-x-2 mb-4">
                        <a href='https://x.com/xyvielyons' target='_blank'><Button isIconOnly radius="full" className="w-[48px] h-[48px]"><FaSquareXTwitter className='w-[24px] h-[24px] text-coolGray800'></FaSquareXTwitter></Button></a>
                        <a href='https://www.instagram.com/xaviertechnologies/' target='_blank'><Button isIconOnly radius="full" className="w-[48px] h-[48px]"><FaInstagram className='w-[24px] h-[24px] text-coolGray800'></FaInstagram></Button></a>
                        <a href="https://www.linkedin.com/in/xyvie-lyons-a8873820a" target='_blank'><Button isIconOnly radius="full" className="w-[48px] h-[48px]"><FaLinkedin className='w-[24px] h-[24px] text-coolGray800'></FaLinkedin></Button></a>
                    </div>

                    <div className="flex flex-row space-x-4">
                        <div className="">
                            <Button  className='bg-accentColor text-white' radius='sm' size='md' startContent={<IoDocument className='w-[24px] h-[24px]'></IoDocument>}>Download CV</Button>
                        </div>
                        <div className="">
                            <Button  className='' radius='sm' variant='bordered' size='md' startContent={<FaLocationArrow className='w-[24px] h-[24px]'/>}>View Portfolio</Button>
                        </div>
                    </div>



            </div>

            <div className="container2 mb-6">
                <div className="max-w-[600px]">
                    <Image className='' src="/xyvie lyons wireframing and development kit_page-0001.jpg" alt='profile' width={1200} height={768} ></Image>

                </div>
            </div>

        </div>
    </div>
)
}
