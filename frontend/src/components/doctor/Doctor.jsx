import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { doctors as fallbackDoctors } from "../../data/doctor";
import { useAxios } from "../../lib/provider/axios";

function Doctor() {
  const nav = useNavigate();
  const { axios } = useAxios();
  const [doctors, setDoctors] = useState(fallbackDoctors);

  // const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("/doctors");
        console.log(res)
        if (res.data.doctors?.length) {
          setDoctors(
            res.data.doctors.filter((doctor) => doctor.isActive !== false),
          );
        }
      } catch {
        setDoctors(fallbackDoctors);
      }
    };

    fetchDoctors();
    // useAxios creates the client for this component; this load should run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
const user = localStorage.getItem("token");

  return (
    <>
      <div className="doc-div my-18 mx-16">
        <div className="top-doc flex justify-between mb-8">
          <h2 className="text-3xl top-doctors">Top Doctors</h2>

          <button
            onClick={() => nav("/all-doctors")}
            className="view-doc-btn border border-green-500 text-green-600 px-2 py-1 rounded-md cursor-pointer hover:text-white transition"
          >
            view all
          </button>
        </div>

        <div className="outer-doc-div grid grid-cols-4">
          {doctors.slice(0, 4).map((doc) => {
            const id = doc._id || doc.id;
            const specialty = doc.specialist || doc.specialty;
            const fee = doc.consultationFee || doc.fee;
            return (
              <div key={id} className="dr-card mx-1/4 w-50 relative">
                <Link to={`/doctor/${id}`}>
                  <div className="relative group">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="h-40 w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <span className="text-white font-semibold text-lg">
                        View Profile
                      </span>
                    </div>
                  </div>
                </Link>
                <h3 className="font-semibold inline-block text-green-500 mt-2">
                  {doc.name}
                </h3>
                <span className="absolute top-0 right-0 text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                  ⭐ {doc.rating || "New"}
                </span>
                <h4 className="spec-h4">{specialty}</h4>
                <p className="exp text-gray-400">
                  {doc.experience}+ experience
                </p>
                {fee ? <p className="text-sm text-gray-400">Rs {fee}</p> : null}
              
              {user ?  <button
                  onClick={() => {
                    if (!user) {
                      const shouldLogin = confirm(
                        "Please login first. Go to login page?",
                      );

                      if (shouldLogin) {
                        nav("/login");
                      }
                    } else {
                      nav(`/doctor/${id}`);
                    }
                  }}
                  className="consult-btn mt-2 w-40 border border-green-600 text-green-600 py-1 rounded hover:bg-green-600 hover:text-white transition"
                >
                  Consult Now
                </button> : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Doctor;
