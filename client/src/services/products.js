import axiosInstance from "../api/axiosConfig";

export const createProducts = async (formData) => {
  try {
    const response = await axiosInstance.post("products/create", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export const getProducts=async()=>{
  try{
    const response=await axiosInstance.get('products/shop',{
          withCredentials:true,
               headers:{
                    "Content-Type":"application/json"
               }
          
     })
    // console.log(response)
    return response;
  }
  catch(err){
    console.log(err.message)
  }
}