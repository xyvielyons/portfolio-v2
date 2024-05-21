'use client'
import React,{useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./logo.jsx";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image.js";
export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [nav,setNav]= useState<string>("home")

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#FFFFFF] max-w-screen-xl mx-auto w-full" maxWidth={"full"}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="w-full h-full">
           <Image src="/logo-no-background.png" width={200} height={100} alt="image logo"></Image>
          </div>
          
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <div className="flex flex-col items-center">
              <Link href="#Home" className={`text-[16px] 0 font-medium ${nav==="home"?"text-coolGray800":"text-coolGray600"}`} onClick={()=>setNav("home")}>
                Home
              </Link>
              {nav==="home" && <div className="w-2 h-2 bg-accentColor rounded-full"></div>}
              
              
          </div>
        </NavbarItem>

        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link href="#About" aria-current="page" className={`text-[16px] font-medium ${nav==="about"?"text-coolGray800":"text-coolGray600"}`} onClick={()=>setNav("about")}>
            About
          </Link>
          {nav==="about" && <div className="w-2 h-2 bg-accentColor rounded-full"></div>}
        </div>
        </NavbarItem>

        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link href="#Service" className={`text-[16px] font-medium ${nav==="service"?"text-coolGray800":"text-coolGray600"}`} onClick={()=>setNav("service")}>
            Service
          </Link>
          {nav==="service" && <div className="w-2 h-2 bg-accentColor rounded-full"></div>}

          </div>
        </NavbarItem>
        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link  href="#Portfolio" className={`text-[16px] font-medium ${nav==="portfolio"?"text-coolGray800":"text-coolGray600"}`} onClick={()=>setNav("portfolio")}>
            Portfolio
          </Link>
          {nav==="portfolio" && <div className="w-2 h-2 bg-accentColor rounded-full"></div>}
        </div>
        </NavbarItem>
        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link href="#Contact" className={`text-[16px] font-medium ${nav==="contact"?"text-coolGray800":"text-coolGray600"}`} onClick={()=>setNav("contact")}>
            Contact
          </Link>
          {nav==="contact" && <div className="w-2 h-2 bg-accentColor rounded-full"></div>}
        </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex space-x-[8px]">
              <button className="h-[48px] w-[48px]  flex items-center justify-center ">
                <FaTwitter className="w-[24px] h-[24px] text-coolGray600 hover:text-coolGray800"/>
              </button>
              <button className="h-[48px] w-[48px]  flex items-center justify-center ">
                <FaInstagram className="w-[24px] h-[24px] text-coolGray600 hover:text-coolGray800"/>
              </button>
              <button className="h-[48px] w-[48px]  flex items-center justify-center">
                <FaLinkedin className="w-[24px] h-[24px] text-coolGray600 hover:text-coolGray800"/>
              </button>
          </div>
          
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        
          <NavbarMenuItem>
              <div className="flex items-center">
              <Link
                className={`w-full text-2xl p-[16px] hover:bg-blue-100 ${nav==="home"?"text-coolGray800":"text-coolGray600"}`}
                href={`#Home`}
                onClick={()=>setNav("home")}
              >
                Home
              </Link>
              {nav==="home" && <div className="w-5 h-5 bg-accentColor rounded-full"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center">
              <Link
                className={`w-full text-2xl p-[16px] hover:bg-blue-100 ${nav==="about"?"text-coolGray800":"text-coolGray600"}`}
                href={`#About`}
                onClick={()=>setNav("about")}
              >
                About
              </Link>
              {nav==="about" && <div className="w-5 h-5 bg-accentColor rounded-full"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center">
              <Link
                className={`w-full text-2xl p-[16px] hover:bg-blue-100 ${nav==="service"?"text-coolGray800":"text-coolGray600"}`}
                href={`#Service`}
                onClick={()=>setNav("service")}
              >
                Service
              </Link>
              {nav==="service" && <div className="w-5 h-5 bg-accentColor rounded-full"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center">
              <Link
                className={`w-full text-2xl p-[16px] hover:bg-blue-100 ${nav==="portfolio"?"text-coolGray800":"text-coolGray600"}`}
                href={`#Portfolio`}
                onClick={()=>setNav("portfolio")}
              >
                Portfolio
              </Link>
              {nav==="portfolio" && <div className="w-5 h-5 bg-accentColor rounded-full"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center">
              <Link
                className={`w-full text-2xl p-[16px] hover:bg-blue-100 ${nav==="contact"?"text-coolGray800":"text-coolGray600"}`}
                href={`#Contact`}
                onClick={()=>{
                  setNav("contact")
                  setIsMenuOpen(true)
                }}
                
              >
                Contact
              </Link>
              {nav==="contact" && <div className="w-5 h-5 bg-accentColor rounded-full"></div>}
              </div>
          </NavbarMenuItem>
          
      
      </NavbarMenu>
    </Navbar>
  );
}

