import React from 'react'
import {Button, ButtonGroup} from "@nextui-org/react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
export default function Contact() {
  return (
    <div className='mx-2' id='Contact'>
      <div className="flex flex-col items-center justify-center">
        <h1 className='text-[32px] text-coolGray800 font-bold'>Contact</h1>
        <p className='text-[16px] text-coolGray600'>Get in touch with me</p>
      </div>
      <div className="grid gap-2  px-4 py-4">
      <Button className="w-full bg-coolGray10 rounded" size="lg" radius="none" startContent={<FaPhoneAlt className='w-[32px] h-[32px]'/>}>
        +254728440683
      </Button>
      <Button className="w-full rounded bg-coolGray10" size="lg" radius="none" startContent={<FaSquareXTwitter className='w-[32px] h-[32px]'/>}>
        @xyvielyons
      </Button>
      <Button className="w-full rounded bg-coolGray10" size="lg" radius="none" startContent={<SiGmail className='w-[32px] h-[32px]'/>}>
        +254728440683
      </Button>
      <Button className="w-full rounded bg-coolGray10" size="lg" radius="none" startContent={<FaSquareInstagram className='w-[32px] h-[32px]'/>}>
        +254728440683
      </Button>  
      </div>
    </div>
  )
}
