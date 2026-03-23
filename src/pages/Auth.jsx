import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div>
        <Link to="/auth/login">login</Link>
        <Link to="/auth/signup">SignUp</Link>
        hello from auth
        <Outlet />
    </div>
  )
}

export default Auth