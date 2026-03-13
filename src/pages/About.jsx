import { FaCircleInfo, FaHouseChimneyUser } from "react-icons/fa6"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import NavBar from "../components/NavBar/NavBar"
import { MdOutlineHomeRepairService } from "react-icons/md"
import { BiSolidContact } from "react-icons/bi"

const About = () => {
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
  return (
    <div>
       <Header>
    <NavBar logo= "Trippy" items={items} btn="Sign Up"/>
    <Hero bgImage="/assets/img/night.jpg" title="About" />
    </Header>
    </div>
  )
}

export default About