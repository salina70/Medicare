import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {doctors} from "../../data/doctor"
import { useAxios } from "../../lib/provider/axios";

function DoctorProfile() {
  const [saved, setSaved] = useState(false);
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
const [showloginMessage, setshowloginMessage] = useState(false)

  let { id } = useParams();
  const { axios } = useAxios();

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/doctors/${id}`);
        setDoctor(res.data.doctor);
      } catch {
        const localDoctor = doctors.find((doc) => doc.id === Number(id));
        setDoctor(localDoctor || null);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
    // useAxios creates the client for this component; reload only when route id changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const details = useMemo(() => {
    if (!doctor) return null;

    return {
      specialty: doctor.specialist || doctor.specialty,
      education: doctor.qualification || doctor.education || "N/A",
      location: doctor.address || doctor.location || "N/A",
      fee: doctor.consultationFee || doctor.fee || "N/A",
      image: doctor.image || "/images/doctor.png",
      rating: doctor.rating || "New",
    };
  }, [doctor]);

  if (loading) {
    return <div className="p-10 text-center text-gray-400">Loading doctor...</div>;
  }

  if (!doctor) {
    return <div className="p-10 text-center text-gray-400">Doctor not found</div>;
  }
const user = JSON.parse(localStorage.getItem("token"))


  return (
    <>
      <div className="mt-6">
        <h2 className="text-4xl text-center mb-4 text-green-600">
          {doctor.name} -{" "}
          <span className="text-gray-500 text-2xl"> {details.specialty}</span>{" "}
          <p className="text-xl mt-2 text-gray-500">
            <i className="fa-regular fa-star"></i>No reviews yet
          </p>
        </h2>
        <div className="flex gap-6">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div className="relative">
                <img
                  src={details.image}
                  alt={doctor.name}
                  className="w-50 h-50 object-cover rounded-xl object-center"
                />
                <div className="absolute top-1 right-1">
                  <i
                    className={`fas fa-heart text-gray-600 text-xl hover:text-red-500 ${saved ? "text-red-600" : "text-gray-500"} `}
                    onClick={() => {
                      setSaved(!saved);
                      alert(
                        saved
                          ? "Removed from favourites"
                          : " Saved to favourites",
                      );
                    }}
                  ></i>
                </div>
              </div>
              <div className="flex flex-col gap-2 pl-4 text-sm">
                <h2>Experience: {doctor.experience}+ years</h2>
                <h2>Education: {details.education}</h2>
                <h2>Location: {details.location}</h2>
                <h2>Fee: {details.fee === "N/A" ? "N/A" : `Rs ${details.fee}`}</h2>

                <h2>Rating: {details.rating}</h2>
                <div className="flex gap-2">

                    {
                      showloginMessage && (
                        <p className="text-red-600 absolute top-75 animate-pulse left-53">
                          Please login to your account!
                        </p>
                      )
                    }
                  <button
                 onClick={()=>{
                  if(!user){
                    setshowloginMessage(true);
                    setTimeout(() => {
                      setshowloginMessage(false)
                    }, 1800);
                    return;
                  }else{
                    alert("conult")
                  }
                 }}
                  className="border-green-600 bg-green-500 hover:bg-green-600 w-30 text-sm text-black font-semibold px-1 py-1 rounded-md">
                    Consult Now
                  </button>
                  <button className="border rounded-sm border-green-700 p-1 w-30">
                    Message Doctor
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[30rem] mt-6 text-xs justify-text">
              <h2 className="text-green-200 text-xl">About Doctor</h2>
              <p>{doctor.description}</p>
            </div>
          </div>
          <div className="border-1 border--white rounded-xl h-60 w-[30rem]">
            <h2 className="text-green-200 text-xl pt-2 pl-2">Availability</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorProfile;
