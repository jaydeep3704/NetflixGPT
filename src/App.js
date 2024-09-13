
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import React from 'react'
import Body from './pages/Body'
import Browse from './pages/Browse'
import Login from "./pages/Login"
import Signup from './pages/Signup'

const App = () => {

  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Body/>
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

export default App
