import {  NavLink } from "react-router-dom"
import "./NavBar.css"
const NavBar = ({logo , items , btn}) => {
  return (
    <nav>
        <h1>{logo}</h1>
        <div>
        <ul>
            {items?.map((item , index) => {
                return(
                    <li key={index}>
                        <NavLink
                            to={item?.url}
                            className={({isActive}) =>
                                isActive ? 'active' : ""
                            }
                            >
                                {item?.icon} {item?.content}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
        <button>{btn}</button>
        </div>
    </nav>
  )
}

export default NavBar