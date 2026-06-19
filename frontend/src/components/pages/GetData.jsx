import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetData = () => {
    const [data,setData]= useState([])

    const fetchData=async()=>{
        const res = await axios.get("http://localhost:8000/api/appointment/get")
        console.log(res) 
        setData(res.data.appointments)

    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(data)
  return (
    <div>GetData
        {data.map((item)=>
          <div>
            </div>
        
        )}
    </div>
  )
}

export default GetData