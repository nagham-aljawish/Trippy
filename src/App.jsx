import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import NavBar from "./components/NavBar/NavBar"
import { BiSolidContact } from "react-icons/bi"
import { MdOutlineHomeRepairService } from "react-icons/md"
import { FaCircleInfo, FaHouseChimneyUser, FaSquareInstagram } from "react-icons/fa6"
import Footer from "./components/Footer/Footer"
import TopFooter from "./components/TopFooter/TopFooter"
import BottomFooter from "./components/BottomFooter/BottomFooter"
import { FaBehanceSquare, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
function App() {
 const items =[
         {
           icon :<FaHouseChimneyUser /> ,
           content: "Home",
           url: "/"
         },
         {
           icon :<FaCircleInfo /> ,
           content: "About",
           url: "/about"
         },
         {
           icon :<MdOutlineHomeRepairService />,
           content: "Service",
           url: "/service"
         },
         {
           icon :<BiSolidContact />,
           content: "Contact",
           url: "/contact"
         },
       ]
  const icons= [
           {
             icon:<FaFacebookSquare />,
           },
           {
             icon:<FaSquareInstagram />,
           },
           {
             icon:<FaBehanceSquare />,
           },
           {
             icon:<FaTwitterSquare />,
           }
         ]
     const footerLinks = [
   {
     title: "Project",
     links: ["Changelog", "Status", "License", "All Versions"]
   },
   {
     title: "Community",
     links: ["GitHub", "Issues", "Project", "Twitter"]
   },
   {
     title: "Help",
     links: ["Support", "Troubleshooting", "Contact us"]
   },
   {
     title: "Others",
     links: ["Terms of Service", "Privacy Policy", "License"]
   }
 ];
  return (
    <>
    <NavBar logo= "Trippy" items={items} btn="Sign Up"/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/service" element={<Service />}/>
    </Routes>
    <Footer>
        <TopFooter title="Trippy" subTitle="Choose your favourite destination." icons={icons}/>
        <BottomFooter footerLinks={footerLinks}/>
      </Footer>
    </>
  )
}

export default App
