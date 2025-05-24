import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router';

function VibeSetup() {
    const navigate=useNavigate()
    
    const [data,setData]=useState({
        occasion:'',
        location:'',
        gender:'',
        ageGroup:'',
        stylePreferences:'',
    })
    function handleData(e){
        setData(prev=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    useEffect(()=>{
        console.log(data)
    },[data])

    function submitData(e){
        e.preventDefault();
         console.log(data)
         navigate('/shop')
    }

  return (
    <div>
       <h2>VibeSetup Questions</h2>
          <form action="" onSubmit={submitData}>
            <h2> What’s the occasion or purpose you’re shopping for? *</h2>
            <select name="occasion" id="" required onChange={handleData} value={data.occasion}>
                <option value=" Job Interview"> Job Interview</option>
                <option value="Wedding(attending)">Wedding(attending)</option>
                <option value=" Hiking / Outdoor Adventure">  Hiking / Outdoor Adventure</option>
                <option value="Party / Night Out">Party / Night Out</option>
                <option value="Temple Visit">Temple Visit</option>
                <option value="Vacation">Vacation</option>
                <option value="Casual Daily Wear">Casual Daily Wear</option>
                <option value=" College / School"> College / School</option>
                <option value=" Wellness / Yoga / Meditation"> Wellness / Yoga / Meditation</option>
                <option value="Other:">Other:</option>
            </select>
            <h2>Where is this event or vibe happening? *</h2>
            <select name="location" id="" required onChange={handleData} value={data.location}>
                <option value="India">India</option>
                <option value="China">China</option>
                <option value="Thai">Thai</option>
                <option value="USA">USA</option>
                <option value="korea">Korea</option>
            </select>
            <h2>What gender do you identify as? *</h2>
            <select name="gender" id="" onChange={handleData} value={data.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="other">other:</option>
            </select>
            <h2>What’s your age group? </h2>
            <select name="ageGroup" id="" onChange={handleData} value={data.ageGroup}>
                <option value="Under 18">Under 18</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45+">45+</option>
            </select>
            <h2> What kind of style do you prefer?</h2>
            <select name="stylePreferences" id="" onChange={handleData} value={data.stylePreferences}>
                <option value="Hot / Summer">Hot / Summer</option>
                <option value="Cold / Winter">Cold / Winter</option>
                <option value="Rainy / Monsoon">Rainy / Monsoon</option>
                <option value="Dry / Desert">Dry / Desert</option>
                <option value="No Preference">No Preference</option>
            </select>
            <input type="submit" />
          </form>

    </div>
  )
}

export default VibeSetup