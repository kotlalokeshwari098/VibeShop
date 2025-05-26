import React, { useState } from 'react'
import { useEffect } from 'react'
import { getCartItems } from '../services/cart'
import { bufferToImageUrl } from '../utils/bufferimage';

function Cart() {
      const [product,setProduct]=useState([]);

    useEffect(()=>{
        const getItems=async ()=>{
            const response=await getCartItems();
            setProduct(()=>         
                    response.data.cart
            )
            // console.log(response.data.cart)
        }

      getItems()
    },[])

    useEffect(()=>{
        console.log("products",product)
    },[product])

  return (
    <div>
      <div class="w-full flex flex-col items-center px-20 py-20 gap-6">
       
        {product.map((item)=>(
           <div class="w-full rounded-md overflow-hidden shadow-md flex">
           
            <div class="w-1/3">
                <div class="h-60 flex items-center justify-center">
                    <img src={bufferToImageUrl(item.image.data)} alt="" class=" object-cover" />
                </div>
                <div class="px-5 py-4">
                    <h3 class="text-2xl font-medium">
                        {item.name}
                    </h3>
                </div>
            </div>
            
        
            <div class="w-2/3 p-6">
                <div class="flex justify-between mb-4">
                    <h3 class="text-xl font-semibold">Price Breakdown</h3>
                    <div class="flex items-center gap-2">
                        <i class="w-7 h-7 bg-white flex rounded-full items-center justify-center ri-add-line"></i>
                        <div class="px-2 py-1 rounded-md bg-white text-black">01</div>
                        <i class="w-7 h-7 bg-white flex rounded-full items-center justify-center ri-subtract-line"></i>
                    </div>
                </div>
                
                <div class="px-4">
                    <div class="flex mt-2">
                        <h4 class="w-1/3">Total MRP</h4>
                        <h4>₹ {item.price}</h4>
                    </div>
                    <div class="flex mt-2">
                        <h4 class="w-1/3">Discount on MRP</h4>
                        <h4> {item.discount}</h4>
                    </div>
                    <div class="flex mt-2">
                        <h4 class="w-1/3">Platform Fee</h4>
                        <h4>₹ 0</h4>
                    </div>
                    <div class="flex mt-2">
                        <h4 class="w-1/3">Shipping Fee</h4>
                        <h4>FREE</h4>
                    </div>
                </div>
                
                <div class="w-full h-[1px] bg-black mt-6"></div>
                <div class="flex mt-4 justify-between">
                    <h3 class="text-xl">Total Amount</h3>
                    <h3 class="font-semibold text-xl text-green-600">₹{Math.round(item.price * (1 - item.discount/100))}</h3>
                </div>
            </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Cart