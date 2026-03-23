import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { FaSquareInstagram } from "react-icons/fa6"
import Footer from "./components/Footer/Footer"
import TopFooter from "./components/TopFooter/TopFooter"
import BottomFooter from "./components/BottomFooter/BottomFooter"
import { FaBehanceSquare, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
import Login from "./pages/Login"
import Auth from "./pages/Auth"
import SignUp from "./pages/SignUp"
import Root from "./pages/Root"
import Services from "./pages/Services"
import Service from "./pages/Service"
function App() {
 
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
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="" element={<Home />}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="service" element={<Services />}/>
        </Route>
      <Route path="/auth" element={<Auth />} >
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<SignUp />}/>
      </Route>
    </Routes>
    <Footer>
        <TopFooter title="Trippy" subTitle="Choose your favourite destination." icons={icons}/>
        <BottomFooter footerLinks={footerLinks}/>
      </Footer>
    </>
  )
}

export default App
