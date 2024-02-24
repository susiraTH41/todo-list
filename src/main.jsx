import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Edit from './Edit.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Member from './pages/Member.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (  
    <div>
      <Navbar/>
      <Home/>
    </div>    
    ),
  },
  {
    path: "/member",
    element: (  
      <div>
        <Navbar/>
        <Member/>

      </div>    
      ),
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
