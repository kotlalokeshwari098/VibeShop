import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'


function AppLayout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default AppLayout