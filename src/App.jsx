import { FaCircleInfo, FaHouseChimneyUser } from "react-icons/fa6"
import NavBar from "./components/NavBar/NavBar"
import { MdOutlineHomeRepairService } from "react-icons/md"
import { BiSolidContact } from "react-icons/bi"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"

function App() {
  const items =[
    {
      icon :<FaHouseChimneyUser /> ,
      content: "Home"
    },
    {
      icon :<FaCircleInfo /> ,
      content: "About"
    },
    {
      icon :<MdOutlineHomeRepairService />,
      content: "Service"
    },
    {
      icon :<BiSolidContact />,
      content: "Contact"
    },
  ]
  return (
    <>
    <Header>
    <NavBar logo= "Trippy" items={items} btn="Sign up"/>
    <Hero bgImage="/assets/img/herobg.jpg" title="Your Journey Your Story" description="Choose Your Favourite Destination." btn="Travel Now" />
    </Header>
    </>
  )
}

export default App
