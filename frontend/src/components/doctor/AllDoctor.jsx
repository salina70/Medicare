import React, { useEffect, useMemo, useRef, useState } from "react";
import { doctors as fallbackDoctors } from "../../data/doctor";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../lib/provider/axios";

function AllDoctor() {
  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState(fallbackDoctors);
  const val=useRef();
const nav = useNavigate();
const user = useSelector((state)=>state.auth.user)
const { axios } = useAxios();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("/doctors");
        if (res.data.doctors?.length) {
          setDoctors(res.data.doctors.filter((doctor) => doctor.isActive !== false));
        }
      } catch {
        setDoctors(fallbackDoctors);
      }
    };

    fetchDoctors();
    // useAxios creates the client for this component; this load should run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredDoctors = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return doctors;

    return doctors.filter((doc) =>
      [doc.name, doc.specialist, doc.specialty]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(term))
    );
  }, [doctors, search]);

  return (
    <>
    <div className="my-10 mx-16 outer-doc">
      {/* Header */}

      <div className="alldoc-div flex justify-between">
          <div>
      <h1 className="inline-block text-xl font-bold text-green-600 mb-6">
        Search <span className="spec">by specialist</span> {" "}
         </h1>
       
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="inline-block search-inp border border-gray-400 ml-2 font-normal text-sm px-2 py-1 placeholder:text-sm text-gray-200 w-70"
          placeholder="cardiologist, dermatologist"
        />
        </div>
        <div className="opt">
        <select className="sort border border-gray-300 rounded-md px-2 py-2 text-xs focus:outline-none focus:border-green-500">
          <option value="">Sort By</option>
          <option value="experience">Experience (High → Low)</option>
          <option >Rating (High → Low)</option>
          <option>Fee (Low → High)</option>
          <option>Fee (High → Low)</option>
        </select>
        </div>
     
      </div>
      {/* Grid */}
      <div className="flex flex-wrap gap-7 justify-center">
        {filteredDoctors.map((doc, index) => {
          const id = doc._id || doc.id || index;
          const specialty = doc.specialist || doc.specialty;
          const fee = doc.consultationFee || doc.fee;

          return (
          <div
            key={id}
            className="dr-card w-50 relative shadow-md rounded-lg overflow-hidden mt-4"
          >
            <img
            
            loading="lazy"
              src={doc.image}
              alt={doc.name}
              className="h-50 w-full object-cover"
            />

            {/* Rating */}
            <span className="absolute top-0 right-0 text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
              ⭐ {doc.rating || "New"}
            </span>

            {/* Info */}
            <div className="p-3 dr-info">
              <h3 className="font-semibold dr-name text-green-600">{doc.name}</h3>

              <h4 ref={val} className="text-gray-700 speciality">{specialty}</h4>

              <p className="text-gray-400 text-sm dr-exp">
                {doc.experience}+ years experience
              </p>
              {fee ? <p className="text-gray-400 text-sm">Rs {fee}</p> : null}

              <button onClick={()=>{if(!user){
                const confirmed = confirm("Please log in!!");
if(confirmed){
                nav("/login")

}
              } else {
                nav(`/doctor/${id}`);
              }}} className="mt-2 w-full border border-green-600 text-green-600 py-1 rounded hover:bg-green-600 hover:text-white transition">
                Consult Now
              </button>
            </div>
          </div>
        )})}
      </div>
    </div>
    </>
  );
}

export default AllDoctor;
