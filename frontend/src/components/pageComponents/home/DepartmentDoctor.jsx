import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DepartmentDoctor() {
  const [selectedDoctor, setSelectedDoctor] = useState({});
  const [form, setform]= useState(false);
  const [doctor, setDoctor] = useState([]);
  const {id} = useParams();
  console.log(id);
  useEffect(() => {
  const getAllDoctors = async () =>{
    let response = await axios.get(`http://localhost:8000/api/departments/${id}`);
setDoctor(response.data.message);
  }
getAllDoctors();
  }, [id])
  
 const consultLogic = ()=> {
setform(true);
<alert>feature is in progress</alert>
}
  return (
    <>
        <div className='flex gap-4 flex-wrap p-4'>
{Array.isArray(doctor) && doctor?.map((item)=>{
  return (
    <article className='text-white' key={item._id}>
      <figure>
        <img className='h-48 rounded-md w-48 object-top object-cover' src={item.image} alt={item.fullName} />
        <figcaption className='text-xl'>{item.fullName} <span className='text-gray-500 text-sm'> {id}</span> </figcaption>
        <strong>Consultation fee: <em>{item.consultationFee} </em></strong>
        <button className='block hover:bg-gray-500 bg-gray-400 text-black px-3 py-1 rounded-md' onClick={consultLogic}>Consult Now</button>
      </figure>
      
    </article>
  )
})}
    </div>

{/* consultation form */}
{form && (
  <>
  <div className='blur shadow-2xl fixed top-0 min-h-screen min-w-screen'></div>
  <div>
    <h2>Consultation Form</h2>
    <form action="" method="POST">
      <input type="text" placeholder={doctor.fullName} />
      <input type="text" />
    </form>
  </div>
  </>
)}
</>
  )
}

export default DepartmentDoctor