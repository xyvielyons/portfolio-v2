import NavbarComponent from "@/components/Navbar";
import HomePage from "@/components/Home";
import MyStats from "@/components/MyStats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="">
       
       <div className="w-full">
         <NavbarComponent></NavbarComponent>
       </div>
       <div className="max-w-screen-xl mx-auto mt-16">
          <div className="pt-4 mx-2 md:mx-4">
            <HomePage></HomePage>
            <MyStats></MyStats>
            <About></About>
            <Skills></Skills>
            <Services></Services>
            <Process></Process>
            <Portfolio></Portfolio>
            <Contact></Contact>
            
          </div>
       </div>

       <div className="">
         <Footer></Footer>
       </div>

     </div>
  );
}
