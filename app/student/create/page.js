/*"use client";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// InputField Component
function InputField({ type, value, placeholder, onChange }) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full p-2 border rounded-md mb-2"
      required
    />
  );
}

export default function CreateStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [usn, setUsn] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate fields
    if (!name || !age || !email || !phone || !address || !gender || !usn) {
      alert("All fields are mandatory!");
      return;
    }

    try {
      const { data, error } = await supabase.from("Student").insert([
        {
          name,
          age,
          email,
          phone,
          address,
          gender,
          usn,
        },
      ]);

      if (error) {
        throw error;
      }

      alert(`Student Profile Created \n ${JSON.stringify(data)}`);

      // Reset form fields
      setName("");
      setAge("");
      setEmail("");
      setPhone("");
      setAddress("");
      setGender("");
      setUsn("");
    } catch (error) {
      alert(`Error: ${JSON.stringify(error.message)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Create Student</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-[400px]">
        <InputField type="text" value={name} placeholder="Student Name" onChange={(e) => setName(e.target.value)} />
        <InputField type="number" value={age} placeholder="Student Age" onChange={(e) => setAge(e.target.value)} />
        <InputField type="email" value={email} placeholder="Student Email" onChange={(e) => setEmail(e.target.value)} />
        <InputField type="text" value={phone} placeholder="Student Phone" onChange={(e) => setPhone(e.target.value)} />
        <InputField type="text" value={address} placeholder="Student Address" onChange={(e) => setAddress(e.target.value)} />
        <InputField type="text" value={gender} placeholder="Student Gender" onChange={(e) => setGender(e.target.value)} />
        <InputField type="text" value={usn} placeholder="Student USN" onChange={(e) => setUsn(e.target.value)} />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}



"use client"
import InputField from '@/app/components/inputField'
import React from 'react'
import {useState} from 'react'
import { supabase } from "@/app/lib/supabase";
import { User2Icon,Share} from 'lucide-react';


export default function CreateStudent() {
    const [name,setName] = useState("")
    const [age,setAge] = useState(0)
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState(0)
    const [address,setAddress] = useState("")
    const [gender,setGender] = useState("")
    const [usn,setUsn] = useState("")
return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className='text-3xl font-bold text-blue-500'>CreateStudent</h1>
            <h1 className='m1-2'><User2Icon size={20}/></h1>
            <InputField 
              type={"text"} 
              value={name}
               placeholder={"Student Name"}
               onChange={(e)=>{
                setName(e.target.value)
               }} />
            <InputField 
              type={"text"} 
              value={email}
               placeholder={"Student Email"}
               onChange={(e)=>{
                setEmail(e.target.value)
               }} />
            <InputField 
              type={"text"} 
              value={phone}
               placeholder={"Student phone"}
               onChange={(e)=>{
                setPhone(e.target.value)
               }} />
            <InputField 
              type={"text"} 
              value={address}
               placeholder={"Student address"}
               onChange={(e)=>{
                setAddress(e.target.value)
               }} />   
            <InputField 
              type={"text"} 
              value={gender}
               placeholder={"Student gender"}
               onChange={(e)=>{
                setGender(e.target.value)
               }} />  
            <InputField 
              type={"text"} 
              value={age}
               placeholder={"Student age"}
               onChange={(e)=>{
                setAge(e.target.value)
            }} />   
            <InputField 
              type={"text"} 
              value={usn}
               placeholder={"Student usn"}
               onChange={(e)=>{
                setUsn(e.target.value)
               }} />  

             <button
             onClick={async(event)=> {
                if(usn==""||name==""||email==""||phone==""||address==""||gender==""||age=="")
                {    
                    alert('All Fields are Mandatory')
                    return;
                } else{
                    try{
                     const{Data,error} = await supabase.from('Student').insert({
                       name:name,
                       usn:usn,
                       phone:phone,
                       email:email,
                       address:address,
                       gender:gender,
                       age:age
                     }).select()
                    if(error != null){
                      throw error
                    }
                    alert(`Student Profile Created \n ${JSON.stringify(data)}`)
                    }catch(e){
                    alert('Error :${JSON.string.stringify(e)}')
                }
            }
        }}
        className='flex flex-row bg-green-800 text-white text-lg p-3 rounded-md shadow space-x-2'> Create Profile
        <Share size={20} className='ml-2'/></button>         
        </div>
    )
}*/




"use client"
import InputField from '@/app/components/InputField'
import React from 'react'
import {useState} from 'react'
import { supabase } from "@/app/lib/supabase";
import { User2Icon,Share} from 'lucide-react';
import useStore from '@/app/stores/studentStore';


export default function CreateStudent() {

    const {setActiveStudent}= useStore()
    const [name,setName] = useState("")
    const [age,setAge] = useState(0)
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState(0)
    const [address,setAddress] = useState("")
    const [gender,setGender] = useState("")
    const [usn,setUsn] = useState("")
return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className='text-3xl font-bold text-blue-500'>CreateStudent</h1>
            <h1 className='m1-2'><User2Icon size={20}/></h1>
            <InputField 
              type={"text"} 
              value={name}
               placeholder={"Student Name"}
               onChange={(e)=>{
                setName(e.target.value)
               }} />
            <InputField 
              type={"text"} 
              value={email}
               placeholder={"Student Email"}
               onChange={(e)=>{
                setEmail(e.target.value)
               }} />
            <InputField 
              type={"text"} 
              value={phone}
               placeholder={"Student phone"}
               onChange={(e)=>{
                setPhone(e.target.value)
               }} />
            <InputField 
              type={"text"} 
              value={address}
               placeholder={"Student address"}
               onChange={(e)=>{
                setAddress(e.target.value)
               }} />   
            <InputField 
              type={"text"} 
              value={gender}
               placeholder={"Student gender"}
               onChange={(e)=>{
                setGender(e.target.value)
               }} />  
            <InputField 
              type={"text"} 
              value={age}
               placeholder={"Student age"}
               onChange={(e)=>{
                setAge(e.target.value)
            }} />   
            <InputField 
              type={"text"} 
              value={usn}
               placeholder={"Student usn"}
               onChange={(e)=>{
                setUsn(e.target.value)
               }} />  

             <button
             onClick={async(event)=> {
                if(usn==""||name==""||email==""||phone==""||address==""||gender==""||age=="")
                {    
                    alert('All Fields are Mandatory')
                    return;
                } else{
                    try{
                     const{Data,error} = await supabase.from('Student').insert({
                      USN:usn,
                      NAME:name,
                      EMAIL:email,
                      PHONE:phone,
                      ADDRESS:address,
                      GENDER:gender,
                      AGE:age
                     }).select()
                    if(error != null){
                      throw error
                    }
                    alert(`Student Profile Created \n ${JSON.stringify(data)}`)
                    }catch(e){
                    alert('Error :${JSON.string.stringify(e)}')
                }
            }
        }}
        className='flex flex-row bg-green-800 text-white text-lg p-3 rounded-md shadow space-x-2'> Create Profile
        <Share size={20} className='ml-2'/></button>         
        </div>
    )
}