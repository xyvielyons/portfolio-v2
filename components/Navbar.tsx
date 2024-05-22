'use client'
import React,{useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import {Link} from 'react-scroll';
import Image from "next/image.js";
export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [nav,setNav]= useState<string>("home")

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="bg-[#FFFFFF] shadow-4dp">
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
              <Link to="Home" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px] font-medium ${nav==="home"?"text-coolGray800":"text-coolGray600"}`} onClick={()=>setNav("home")}>
                Home
              </Link>
              {nav==="home" && <div className="w-2 h-2 bg-accentColor rounded-full"></div>}
              
              
          </div>
        </NavbarItem>

        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="About" spy={true} smooth={true} offset={-60} duration={500} aria-current="page" className={`text-[16px] font-medium ${nav==="about"?"text-coolGray800":"text-coolGray600"}`} onClick={()=>setNav("about")}>
            About
          </Link>
          {nav==="about" && <div className="w-2 h-2 bg-accentColor rounded-full"></div>}
        </div>
        </NavbarItem>

        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Service" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px] font-medium ${nav==="service"?"text-coolGray800":"text-coolGray600"}`} onClick={()=>setNav("service")}>
            Service
          </Link>
          {nav==="service" && <div className="w-2 h-2 bg-accentColor rounded-full"></div>}

          </div>
        </NavbarItem>
        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Portfolio" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px] font-medium ${nav==="portfolio"?"text-coolGray800":"text-coolGray600"}`} onClick={()=>setNav("portfolio")}>
            Portfolio
          </Link>
          {nav==="portfolio" && <div className="w-2 h-2 bg-accentColor rounded-full"></div>}
        </div>
        </NavbarItem>
        <NavbarItem>
        <div className="flex flex-col items-center">
          <Link to="Contact" spy={true} smooth={true} offset={-60} duration={500} className={`text-[16px] font-medium ${nav==="contact"?"text-coolGray800":"text-coolGray600"}`} onClick={()=>setNav("contact")}>
            Contact
          </Link>
          {nav==="contact" && <div className="w-2 h-2 bg-accentColor rounded-full"></div>}
        </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex space-x-[8px]">
              <a href="https://x.com/xyvielyons" target='_blank'><button className="h-[40px] w-[40px]  flex items-center justify-center ">
                <FaSquareXTwitter className="w-[24px] h-[24px] text-coolGray600 hover:text-coolGray800"/>
              </button></a>
              <a href="https://www.instagram.com/xaviertechnologies/" target='_blank'><button className="h-[40px] w-[40px]  flex items-center justify-center ">
                <FaInstagram className="w-[24px] h-[24px] text-coolGray600 hover:text-coolGray800"/>
              </button></a>
              <a href="https://www.linkedin.com/in/xyvie-lyons-a8873820a" target='_blank'><button className="h-[40px] w-[40px]  flex items-center justify-center">
                <FaLinkedin className="w-[24px] h-[24px] text-coolGray600 hover:text-coolGray800"/>
              </button></a>
          </div>
          
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        
          <NavbarMenuItem>
              <div className="flex items-center">
              <Link
                to="Home" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full text-2xl p-[16px] hover:bg-blue-100 ${nav==="home"?"text-coolGray800":"text-coolGray600"}`}
                href={`#Home`}
                onClick={()=>{
                  setNav("home")
                  setIsMenuOpen(false)
                }}
              >
                Home
              </Link>
              {nav==="home" && <div className="w-5 h-5 bg-accentColor rounded-full"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center">
              <Link
                to="About" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full text-2xl p-[16px] hover:bg-blue-100 ${nav==="about"?"text-coolGray800":"text-coolGray600"}`}
                href={`#About`}
                onClick={()=>{
                  setNav("about")
                  setIsMenuOpen(false)
                }}
              >
                About
              </Link>
              {nav==="about" && <div className="w-5 h-5 bg-accentColor rounded-full"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center">
              <Link
                to="Service" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full text-2xl p-[16px] hover:bg-blue-100 ${nav==="service"?"text-coolGray800":"text-coolGray600"}`}
                href={`#Service`}
                onClick={()=>{
                  setNav("service")
                  setIsMenuOpen(false)

                }}
              >
                Service
              </Link>
              {nav==="service" && <div className="w-5 h-5 bg-accentColor rounded-full"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center">
              <Link
                to="Portfolio" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full text-2xl p-[16px] hover:bg-blue-100 ${nav==="portfolio"?"text-coolGray800":"text-coolGray600"}`}
                href={`#Portfolio`}
                onClick={()=>{
                  setNav("portfolio")
                  setIsMenuOpen(false)

                }}
              >
                Portfolio
              </Link>
              {nav==="portfolio" && <div className="w-5 h-5 bg-accentColor rounded-full"></div>}
              </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
              <div className="flex items-center">
              <Link
                to="Contact" 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                className={`w-full text-2xl p-[16px] hover:bg-blue-100 ${nav==="contact"?"text-coolGray800":"text-coolGray600"}`}
                href={`#Contact`}
                onClick={()=>{
                  setNav("contact")
                  setIsMenuOpen(false)
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

