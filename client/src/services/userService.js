import axiosInstance from "../api/axiosConfig"

export async function userService(){
     const data=await axiosInstance.get('/')
     console.log(data)
     return data;
}
export async function userRegister(formData){
     const data=await axiosInstance.post('/users/register',formData,{
          withCredentials:true,
          headers:{
               "Content-Type":"application/json"
          }
     })
     return data
}
export async function userLogin(formData){
     const data=await axiosInstance.post('/users/login',formData,{
          withCredentials:true,
               headers:{
                    "Content-Type":"application/json"
               }
          
     })
     return data
}

export async function userLogout(){
     const user=await axiosInstance.get('/users/logout',{
          withCredentials:true
     })
     console.log(user)
}