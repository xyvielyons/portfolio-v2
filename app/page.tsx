import NavbarComponent from "@/components/Navbar";
import HomePage from "@/components/Home";
import Stats from "@/components/stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Process from "@/components/Process";
export default function Home() {
  return (
    <div className="">
       
       <div className="w-full">
         <NavbarComponent></NavbarComponent>
       </div>
       <div className="max-w-screen-xl mx-auto mt-16">
          <div className="pt-4 mx-2">
            <HomePage></HomePage>
            <Stats></Stats>
            <About></About>
            <Skills></Skills>
            <Services></Services>
            <Process></Process>
          </div>
       </div>

     </div>
  );
}
