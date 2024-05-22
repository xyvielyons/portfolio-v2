'use client'
import React from 'react'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
export default function Portfolio() {
  return (
    <div className='px-4 py-4 mt-2' id='Portfolio '>
      <div className="flex flex-col items-center">
        <h1 className='text-[32px] font-bold text-coolGray800'>Portfolio</h1>
        <p className='text-[16px] text-coolGray600'>A selection of featured and selected projects</p>
      </div>

      <Player
      autoplay
      loop
      src="/lottie.json"
      style={{ height: '300px', width: '300px' }}
      ></Player>

      <div className="">
      <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Not uploaded yet
      </AlertDescription>
    </Alert>
      </div>

    </div>
  )
}
