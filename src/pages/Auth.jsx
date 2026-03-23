import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Form from '../components/Form/Form'

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
      const fields = [
    { name: "name", type: "text", placeholder: "Your Name" },
    { name: "email", type: "email", placeholder: "Your Email" },
    { name: "password", type: "password", placeholder: "password" },
    { name: "confirmPassword", type: "password", placeholder: "Repeate your password" },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
  }
  return (
     <div>
    <Header>
    <Hero bgImage="/assets/img/contact.jpg" title="Sign Up" />
    </Header>
    <Form
  title="Create an account"
  fields={fields}
  buttonText="Register"
  onSubmit={handleSubmit}
  footerText="Have already an account?"
  footerLink="/login"
  footerLinkText="Login here"
/>
    </div>
  )
}

export default Auth