import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to='/' className="text-2xl font-bold tracking-tight flex items-center">
            <span className="text-yellow-300">Vibe</span>Shop
            <span className="ml-1 text-yellow-300">🛍️</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to='/' className="hover:text-yellow-300 transition-colors">Home</Link>
            <Link to='/shop' className="hover:text-yellow-300 transition-colors">Shop</Link>
            <Link to='/login' className="hover:text-yellow-300 transition-colors">Login</Link>
            <Link to='/signup' className="hover:text-yellow-300 transition-colors">Sign Up</Link>
            <Link to='/cart' className="relative group">
              <div className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-indigo-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">3</span>
              </div>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-2 flex flex-col">
            <Link to='/' className="block py-2 px-4 hover:bg-indigo-800 rounded transition-colors">Home</Link>
            <Link to='/shop' className="block py-2 px-4 hover:bg-indigo-800 rounded transition-colors">Shop</Link>
            <Link to='/login' className="block py-2 px-4 hover:bg-indigo-800 rounded transition-colors">Login</Link>
            <Link to='/signup' className="block py-2 px-4 hover:bg-indigo-800 rounded transition-colors">Sign Up</Link>
            <Link to='/cart' className=" py-2 px-4 hover:bg-indigo-800 rounded transition-colors flex items-center">
              <span>Cart</span>
              <span className="ml-2 bg-yellow-400 text-indigo-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">3</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header