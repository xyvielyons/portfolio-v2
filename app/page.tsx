import NavbarComponent from "@/components/Navbar";
import HomePage from "@/components/Home";
import Stats from "@/components/stats";
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
          </div>
       </div>

     </div>
  );
}
