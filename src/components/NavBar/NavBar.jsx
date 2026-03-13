import { Link } from "react-router-dom"
import "./NavBar.css"
const NavBar = ({logo , items , btn}) => {
  return (
    <nav>
        <h1>{logo}</h1>
        <div>
        <ul>
            {items?.map((item , index) => {
                return(
                    <li key={index}><Link to={item?.url}>{item?.icon} {item?.content}</Link></li>
                )
            })}
        </ul>
        <button>{btn}</button>
        </div>
    </nav>
  )
}

export default NavBar