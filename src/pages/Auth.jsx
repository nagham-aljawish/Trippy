import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'

/*const Auth = () => {
  return (
    <div>
        <Link to="/auth/login">login</Link>
        <Link to="/auth/signup">SignUp</Link>
        hello from auth
        <Outlet />
    </div>
  )
}

export default Auth*/
const Auth = () => {
  return (
     <div>
    <Header>
    <Hero bgImage="/assets/img/contact.jpg" title="Sign Up" />
    </Header>
    </div>
  )
}

export default Auth