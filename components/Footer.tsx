import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className='bg-coolGray10 flex flex-row justify-around p-4 items-center'>
      <div className="">
        <Image src="/logo-no-background.png" alt='logo' width={150} height={150}></Image>
      </div>
      <div className="">
        <h1>copright@xyvielyons2024</h1>
      </div>
    </div>
  )
}
