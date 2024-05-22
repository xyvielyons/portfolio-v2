import React from 'react'
import { FaImages } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import { BsDatabaseFillGear } from "react-icons/bs";
import { SiDatabricks } from "react-icons/si";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";
import { MdAccessibility } from "react-icons/md";
import { RiSeoFill } from "react-icons/ri";
import { GrHostMaintenance } from "react-icons/gr";
function Services() {
  return (
    <div className='mx-2 mt-[16px]' id='Service'>
        <div className="flex items-center justify-center flex-col my-4">
            <h2 className='text-[20px] font-medium text-coolGray800'>Services</h2>
            <h1 className='text-[32px] font-bold text-coolGray800'>What do we offer?</h1>
            <p className='text-[16px] text-coolGray600'>The services that makes your life easier</p>
        </div>
        <div className="space-y-2 md:space-y-4 xl:space-y-4">
            <div className="space-y-2 flex flex-col md:flex-row md:gap-4 xl:gap-6">
                <div className="bg-coolGray10 py-4 px-4 rounded space-y-4 md:mt-[8px] md:w-1/2">
                    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-slate-300"><FaImages className='w-[24px] h-[24px] text-coolGray800'/></div>
                    <div className="">
                        <h1 className='text-[20px] font-bold text-coolGray800'>User Interface (UI) & User Experience (UX) Design</h1>
                    </div>
                    <div className="">
                        <p>I create user-centered designs that are both visually appealing and easy to use. This includes crafting wireframes, prototypes, and high-fidelity mockups</p>
                    </div>
                </div>
                <div className="bg-coolGray10 py-4 px-4 rounded space-y-4 md:w-1/2">
                    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-slate-300"><MdDevices className='w-[24px] h-[24px] text-coolGray800'/></div>
                    <div className="">
                        <h1 className='text-[20px] font-bold text-coolGray800'>Front-End Development (HTML, CSS, JavaScript)</h1>
                    </div>
                    <div className="">
                        <p>I bring your designs to life by writing clean, well-structured code that ensures a smooth user experience across different browsers and devices</p>
                    </div>
                </div>
            </div>
            <div className="space-y-2 md:space-y-4">
                <div className="space-y-2 flex flex-col md:flex-row md:gap-4 xl:gap-6">
                    <div className="bg-coolGray10 py-4 px-4 rounded space-y-4 md:w-1/2 md:mt-[8px]">
                        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-slate-300"><BsDatabaseFillGear className='w-[24px] h-[24px] text-coolGray800'/></div>
                        <div className="">
                            <h1 className='text-[20px] font-bold text-coolGray800'>Back-End Development (Programming Languages)</h1>
                        </div>
                        <div className="">
                            <p> I can handle the server-side logic of your website, ensuring data is processed and stored securely</p>
                        </div>
                    </div>
                    <div className="bg-coolGray10 py-4 px-4 rounded space-y-4 md:w-1/2">
                        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-slate-300"><SiDatabricks className='w-[24px] h-[24px] text-coolGray800'/></div>
                        <div className="">
                            <h1 className='text-[20px] font-bold text-coolGray800'>Content Management System (CMS) Development</h1>
                        </div>
                        <div className="">
                            <p>I can develop websites using popular CMS platforms, allowing you to easily manage your website content</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-2 md:space-y-4">
                <div className="space-y-2 flex flex-col md:flex-row md:gap-4 xl:gap-6">
                    <div className="bg-coolGray10 py-4 px-4 rounded space-y-4 md:w-1/2 md:mt-[8px]">
                        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-slate-300"><FaMoneyCheckAlt className='w-[24px] h-[24px] text-coolGray800'/></div>
                        <div className="">
                            <h1 className='text-[20px] font-bold text-coolGray800'>E-commerce Development</h1>
                        </div>
                        <div className="">
                            <p>I can create custom online stores that are user-friendly, secure, and optimized for conversions</p>
                        </div>
                    </div>
                    <div className="bg-coolGray10 py-4 px-4 rounded space-y-4 md:w-1/2">
                        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-slate-300"><MdDevicesOther className='w-[24px] h-[24px] text-coolGray800'/></div>
                        <div className="">
                            <h1 className='text-[20px] font-bold text-coolGray800'>Responsive Design</h1>
                        </div>
                        <div className="">
                            <p>I can build a website that seamlessly adapts its layout across different devices,from desktops to smartphones, delivering an optimal user experience on every screen</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <div className="space-y-2 flex flex-col md:flex-row md:gap-4 xl:gap-6">
                    <div className="bg-coolGray10 py-4 px-4 rounded space-y-4 md:w-1/2 md:mt-[8px]">
                        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-slate-300"><MdAccessibility className='w-[24px] h-[24px] text-coolGray800'/></div>
                        <div className="">
                            <h1 className='text-[20px] font-bold text-coolGray800'>Accessibility Compliance</h1>
                        </div>
                        <div className="">
                            <p>I develop websites that are accessible to everyone, regardless of their abilities</p>
                        </div>
                    </div>
                    <div className="bg-coolGray10 py-4 px-4 rounded space-y-4 md:w-1/2 ">
                        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-slate-300"><RiSeoFill className='w-[24px] h-[24px] text-coolGray800'/></div>
                        <div className="">
                            <h1 className='text-[20px] font-bold text-coolGray800'>Search Engine Optimization (SEO) Implementation</h1>
                        </div>
                        <div className="">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p>I can integrate best practices to improve your website's ranking in search engine results</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-coolGray10 py-4 px-4 rounded space-y-4 md:mt-[8px] xl:mt-[16px]">
                    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-slate-300"><GrHostMaintenance className='w-[24px] h-[24px] text-coolGray800'/></div>
                    <div className="">
                        <h1 className='text-[20px] font-bold text-coolGray800'>Website Maintenance & Support</h1>
                    </div>
                    <div className="">
                        <p>I can provide ongoing maintenance and support to keep your website running smoothly and securely</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Services