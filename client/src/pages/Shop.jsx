import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getProducts } from '../services/products';
import { bufferToImageUrl } from '../utils/bufferimage';
import { cartAdding } from '../services/cart';

function Shop() {
  const [sortBy, setSortBy] = useState('popular');
  const [products,setProducts]=useState([])
  
  useEffect(()=>{
     const product=async ()=>{
      try{
        const response= await getProducts();
        setProducts(response.data)
     }
     catch(err){
      console.log(err.message)
     }
         
     }
     product()
  },[])

  async function addToCart(id){
     try{
         const data=await cartAdding(id)
         console.log(data)
     }catch(err){
        console.log(err.message)
     } 
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Shop Hero */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg shadow-lg mb-8">
          <div className="p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Shop the Vibe</h1>
            <p className="mb-4 max-w-xl">
              Discover products tailored to your style and current occasion. Find what matches your vibe.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full md:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              {/* Sort Options */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 mb-3">Sort By</h3>
                <select 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="discount">Biggest Discount</option>
                </select>
              </div>
              
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/shop" className="text-indigo-600 hover:text-indigo-800 font-medium">
                      New Collection
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" className="text-gray-600 hover:text-indigo-600">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" className="text-gray-600 hover:text-indigo-600">
                      Discounted Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" className="text-gray-600 hover:text-indigo-600">
                      Best Sellers
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Filter Options */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 mb-3">Filter By</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Occasion</h4>
                  <div className="space-y-1">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                      <span className="ml-2 text-gray-600">Party</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                      <span className="ml-2 text-gray-600">Hiking</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                      <span className="ml-2 text-gray-600">Festival</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                      <span className="ml-2 text-gray-600">Beach</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Availability</h4>
                  <div className="space-y-1">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                      <span className="ml-2 text-gray-600">In Stock</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                      <span className="ml-2 text-gray-600">Pre-order</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
                  <div className="flex items-center">
                    <input 
                      type="range" 
                      min="0" 
                      max="5000" 
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>₹5000</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-200">
                Apply Filters
              </button>
            </div>
          </div>
          
          {/* Product Grid */}
           <div className="w-full md:w-3/4">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">All Products</h2>
              <span className="text-gray-500 text-sm"> products</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products && products.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-200 hover:scale-105 hover:shadow-lg">
                  {/* <div className={`h-48 bg-${product.image}-500 bg-opacity-80 flex items-center justify-center`}>
                     Product image placeholder *
                    <span className="text-4xl">🛍️</span>
                  </div> */}
                  <div className={` bg-opacity-80 flex items-center justify-center  h-52 w-full`} style={{ backgroundColor: `#${product.bgcolor}` }}>
                     <img src={bufferToImageUrl(product.image.data, "image/webp")} alt="" className="w-1/2 "/>
                  </div>
                  
                  <div className={`p-4`} style={{
    backgroundColor: `#${product.panelcolor}`,
    color: `#${product.textcolor}`
  }}>
                    <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        {product.discount > 0 ? (
                          <>
                            <span className="line-through text-white-500 mr-2">₹{product.price}</span>
                            <span className="font-bold text-indigo-600">
                              ₹{Math.round(product.price * (1 - product.discount/100))}
                            </span>
                          </>
                        ) : (
                          <span className="font-bold text-indigo-600">₹{product.price}</span>
                        )}
                      </div>
                      {product.discount > 0 && (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          {product.discount}% OFF
                        </span>
                      )}
                    </div>
                  
                       <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center justify-center transition duration-200" onClick={()=>addToCart(product._id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart
                    </button>
                    
                 
                   
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a href="#" className="py-2 px-4 bg-white border border-gray-300 rounded-l-md text-gray-700 hover:bg-gray-50">
                  Previous
                </a>
                <a href="#" className="py-2 px-4 bg-indigo-600 border border-indigo-600 text-white">
                  1
                </a>
                <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  2
                </a>
                <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  3
                </a>
                <a href="#" className="py-2 px-4 bg-white border border-gray-300 rounded-r-md text-gray-700 hover:bg-gray-50">
                  Next
                </a>
              </nav>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Shop