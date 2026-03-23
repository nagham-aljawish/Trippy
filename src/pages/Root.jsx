import React from 'react'
import { BiSolidContact } from 'react-icons/bi'
import { FaCircleInfo, FaHouseChimneyUser } from 'react-icons/fa6'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const Root = () => {
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
         <NavBar logo= "Trippy" items={items} btn="Sign Up"/>
         <Outlet />
    </div>
  )
}

export default Root