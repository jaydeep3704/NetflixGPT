import React from 'react'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Browse from './Browse'
import Home from './Home'

const Body = () => {







  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    }
  ])

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body


