import { FaCircleInfo, FaHouseChimneyUser } from "react-icons/fa6"
import NavBar from "./components/NavBar/NavBar"
import { MdOutlineHomeRepairService } from "react-icons/md"
import { BiSolidContact } from "react-icons/bi"

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
     <NavBar logo= "Trippy" items={items} btn="Sign up"/>
    </>
  )
}

export default App
