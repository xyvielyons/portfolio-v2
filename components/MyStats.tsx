'use client'
import React from 'react'
import CountUp from "react-countup";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
function MyStats() {
  return (
    <div className="w-full space-y-2 flex flex-col lg:flex-row lg:gap-4 gap-2">
        <div className="flex flex-row w-full space-x-2 lg:mt-[8px] lg:gap-4 gap-2">
           <Card className='w-full' shadow='none'>
                <CardHeader className='bg-coolGray10 flex flex-col items-center justify-center'>
                    <h1 className='text-[24px] font-normal text-accentColor'>0<CountUp
                        start={0}
                        end={7}
                        duration={8}
                        delay={2}
                    />+</h1>
                    <p className='text-[16px] font-normal text-coolGray600'>Experience</p>

                </CardHeader>
                
            </Card>
            <Card className='w-full' shadow='none'>
                <CardHeader className='bg-coolGray10 flex flex-col items-center justify-center'>
                    <h1 className='text-[24px] font-normal text-accentColor'>0<CountUp
                        start={0}
                        end={8}
                        duration={8}
                        delay={2}
                    />+</h1>
                    <span className='text-[16px] font-normal text-coolGray600'>Awards</span>

                </CardHeader>
                
            </Card>
        </div>
        <div className="flex flex-row w-full space-x-2 lg:gap-4 gap-2">
           <Card className='w-full' shadow='none'>
                <CardHeader className='bg-coolGray10 flex flex-col items-center justify-center'>
                    <h1 className='text-[24px] font-normal text-accentColor'><CountUp
                        start={0}
                        end={200}
                        duration={8}
                        delay={2}
                    />+</h1>
                    <span className='text-[16px] font-normal text-coolGray600'>Happy Clients</span>

                </CardHeader>
                
            </Card>
            <Card className='w-full' shadow='none'>
                <CardHeader className='bg-coolGray10 flex flex-col items-center justify-center'>
                    <h1 className='text-[24px] font-normal text-accentColor'><CountUp
                        start={0}
                        end={500}
                        duration={8}
                        delay={2}
                    />+</h1>
                    <span className='text-[16px] font-normal text-coolGray600'>Projects</span>

                </CardHeader>
                
            </Card>
        </div>
            
            
            
    </div>
       
  )
}

export default MyStats