import { FaCircleInfo, FaHouseChimneyUser } from "react-icons/fa6"
import NavBar from "./components/NavBar/NavBar"
import { MdOutlineHomeRepairService } from "react-icons/md"
import { BiSolidContact } from "react-icons/bi"
import Header from "./components/Header/Header"

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
     </Header>
    </>
  )
}

export default App
