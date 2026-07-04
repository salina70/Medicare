import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useAxios } from '../../lib/provider/axios';
import toast from 'react-hot-toast';

function AllDepartment() {
  const [searchParams] = useSearchParams();
  const departmentName = searchParams.get('name')
  const {axios} = useAxios()
  const specificDoctor =  async () => {
try{
      const res = await axios.get(`http://localhost:8000/department/${name}`);
      console.log(res.data)
}catch(error){
toast.error(error.response?.data?.message || "something went wrong")
}
  }
  return (
    <div>AllDepartment: {departmentName}</div>
  )
}

export default AllDepartment