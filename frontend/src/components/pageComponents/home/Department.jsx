import react, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Department() {
  const navigate = useNavigate();
  const [dept, setDept] = useState([]);
  const getData = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/departments");
      console.log(res);
      setDept(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(dept);
  return (
    <>
      <h1 className="text-center text-2xl px-4 mt-4 mb-4">All Departments</h1>
      <div className="flex m-2 gap-4 flex-wrap justify-center">
        {dept.map((item, idx) => {
          return (
            <div
              onClick={() => {
                navigate(`/departments/${item._id}`);
              }}
              className="px-6 text-sm cursor-default hover:bg-black hover:text-white hover:border-white hover:border-1 bg-white text-black flex justify-center items-center py-2 rounded-xl"
              key={idx}
            >
              <p>{item.icon}</p>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Department;
