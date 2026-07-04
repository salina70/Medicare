import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import {useState} from "react"
import axios from "axios";


function SymptomDetail() {
  const [open, setopen] = useState(false)
  const [doctor, setDoctor] = useState([])
  // const { name } = useParams();
const [searchParam] = useSearchParams();
const name = searchParam.get('name')
const displayName = name
  ?.replace(/-/g, " ")
  .replace(/\b\w/g, (char) => char.toUpperCase());

  useEffect(()=>{
  const fetchDoctor = async() =>{
  const res = await axios.get("http://localhost:8000/api/doctors")
  console.log(res.data.doctors)
  setDoctor(res.data.doctors)
  }
fetchDoctor()
  },[])
  console.log(doctor)


  return (
    <>
          <h1 className="text-2xl mt-3 ml-3 font-bold">Available doctors for <span className="text-green-600">{displayName}</span></h1>

    <div className="p-5 flex gap-14 justify-center">
      {doctor.map((doc, idx)=>{
        console.log(doc)
        return(
          <div key={idx} className="flex gap-2 mt-4">
<div>
  <img 
  className="rounded-full object-cover w-28 h-28"
  width={150}
  src={`http://localhost:8000/uploads/${doc.image}`} 
 />
</div>
<div className="mt-4"> <h2>Name: {doc.fullName}</h2>
<p>Consultation Fee: Rs {doc.consultationFee}</p>
<p>{doc.phone}</p>
<button className="bg-green-500 text-black rounded-md px-4 py-1 mt-2">Book Now</button>
</div>
            </div>
        )
      })}
    </div>


    
      </>
  );
}

export default SymptomDetail;
