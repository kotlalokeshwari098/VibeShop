import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { userService } from '../services/userService'

function HomePage() {
    // const [data,setData]=useState('')

    useEffect(()=>{
      const getData=async()=>{
           const item=await userService();
           console.log(item)
      }

      getData()
      
    },[])


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect <span className="text-yellow-300">Vibe</span>
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Shop products tailored to your current occasion and preferences. Tell us your vibe, and we'll do the rest.
            </p>
            <div className="flex space-x-4">
              <Link to="/shop" className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
                Shop Now
              </Link>
              <Link to="/signup" className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-800 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-md">
              <div className="bg-gradient-to-r from-pink-500 to-orange-400 h-60 flex items-center justify-center">
                <span className="text-6xl">🛍️</span>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Find Your Vibe</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-pink-100 rounded p-2 text-center text-pink-800 text-sm font-medium">Party</div>
                  <div className="bg-blue-100 rounded p-2 text-center text-blue-800 text-sm font-medium">Hiking</div>
                  <div className="bg-green-100 rounded p-2 text-center text-green-800 text-sm font-medium">Festival</div>
                  <div className="bg-purple-100 rounded p-2 text-center text-purple-800 text-sm font-medium">Beach</div>
                  <div className="bg-yellow-100 rounded p-2 text-center text-yellow-800 text-sm font-medium">Birthday</div>
                  <div className="bg-indigo-100 rounded p-2 text-center text-indigo-800 text-sm font-medium">Date</div>
                </div>
                <Link to="/shop" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded transition duration-300">
                  Find Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className={`h-60 bg-gradient-to-r ${
                  item === 1 ? 'from-pink-400 to-purple-500' : 
                  item === 2 ? 'from-blue-400 to-indigo-500' : 
                  item === 3 ? 'from-green-400 to-teal-500' : 
                  'from-yellow-400 to-orange-500'
                }`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Trendy Item {item}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-indigo-800">₹1,200</span>
                    {item % 2 === 0 && (
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">20% OFF</span>
                    )}
                  </div>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop" className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How VibeShop Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Select Your Occasion</h3>
              <p className="text-gray-600">
                Choose from a variety of occasions like hiking, birthday, festival, or date night.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Share Your Preferences</h3>
              <p className="text-gray-600">
                Tell us a bit about yourself so we can personalize your shopping experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-pink-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive curated product recommendations that perfectly match your vibe and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with VibeShop</h2>
          <p className="mb-8 max-w-md mx-auto">
            Subscribe to our newsletter for exclusive offers, new arrivals, and personalized recommendations.
          </p>
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l focus:outline-none text-gray-800"
            />
            <button 
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold px-6 py-3 rounded-r transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default HomePage