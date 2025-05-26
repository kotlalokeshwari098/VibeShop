import axiosInstance from "../api/axiosConfig"

export const cartAdding=async (id)=>{
    try{
          const response=await axiosInstance.get(`products/addToCart/${id}`,{
             withCredentials:true
          } )
          console.log(response)
          return response
    }
    catch(err){
        console.log(err.message)
    }
}

export const getCartItems=async()=>{
  try{
   const response=await axiosInstance.get('products/cart',{
           withCredentials:true
   })
  //  console.log(response);
   return response
  }
  catch(err){
    console.log(err)
  }
}