import axiosInstance from "../api/axiosConfig"

export async function userService(){
     const data=await axiosInstance.get('/')
     console.log(data)
     return data;
}