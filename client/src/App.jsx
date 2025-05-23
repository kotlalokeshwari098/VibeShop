import React from 'react'
import {createBrowserRouter,createRoutesFromElements,BrowserRouter,Route,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Admin from './pages/Admin';
import Cart from './pages/Cart'
import CreateProducts from './pages/CreateProducts'
import Login from './pages/Login'
import OwnerLogin from './pages/OwnerLogin'
import Shop from './pages/Shop'
import SignUp from './pages/SignUp'
import AppLayout from './layouts/AppLayout';
import VibeSetup from './pages/VibeSetup';


 const routes=createBrowserRouter(createRoutesFromElements(
         <Route path='/' element={<AppLayout />}> 
           <Route index element={<HomePage />}/>
           <Route path='/admin' element={<Admin />}/>
           <Route path='/cart' element={<Cart />}/>
           <Route path='/createproducts' element={<CreateProducts />}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/ownerlogin' element={<OwnerLogin/>}/>
           <Route path='/shop' element={<Shop/>}/>
           <Route path='/signup' element={<SignUp/>}/>
           <Route path='vibesetup' element={<VibeSetup />}/>
         </Route>
       
  ))


function App() {
  return (
    <div>
      <RouterProvider router={routes}/>    
    </div>
  )
}

export default App