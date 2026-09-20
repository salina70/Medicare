import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ESEWA_URL = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";
const ESEWA_PRODUCT_CODE = "EPAYTEST";
const ESEWA_SECRET = "8gBm/:&EnhH.1/q";

function SymptomDetail() {
  const id = useParams();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [transaction_uuid, setTransactionUuid] = useState(uuidv4());
  const [department, setdepartment] = useState([])
  const [doctors, setDoctors] = useState([]);
  const [searchParam] = useSearchParams();
  const name = searchParam.get("name");
  const user = useSelector((state) => state.auth.user);
  const displayName = name
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await axios.get(`http://localhost:8000/api/doctors/${id}`);
      setDoctors(res.data.doctors);
      const departmentRes = await axios.get("http://localhost:8000/api/department");
      setdepartment(departmentRes.data.department);
      
    };
    fetchDoctors();
  }, []);

  const total_amount = selectedDoctor?.consultationFee || 0;



  const signature =
    total_amount > 0
      ? CryptoJS.enc.Base64.stringify(
          CryptoJS.HmacSHA256(
            `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${ESEWA_PRODUCT_CODE}`,
            ESEWA_SECRET,
          ),
        )
      : "";

  const handleBook = (doc) => {
    setTransactionUuid(uuidv4());
    setSelectedDoctor(doc);
  };

  const handleFormSubmit = () => {
    sessionStorage.setItem(
      "esewa_transaction",
      JSON.stringify({
        transaction_uuid,
        total_amount,
        product_code: ESEWA_PRODUCT_CODE,
      }),
    );
  };

  return (
    <>
    <div className="flex justify-between px-8 my-2">
      <div>
          <h1 className="text-2xl font-bold">
        Available doctors for{" "}
        <span className="text-green-600">{displayName}</span>
      </h1>
      </div>
      <div className="border border-white">
<select className="border-none focus:outline-none focus:border-transparent text-sm" name="" id="">
  <option className="bg-gray-500" selected value="">sort by</option>
  <option className="bg-gray-500" value="">rating (high to low)</option>
  <option className="bg-gray-500" value="">price (low to high)</option>
    <option className="bg-gray-500" value="">price (high to low)</option>
  <option className="bg-gray-500" value="">experience (high to low)</option>
</select>
      </div>
    </div>

      <div className="p-5 flex gap-14 justify-center flex-wrap">
        {doctors.map((doc) => (
          <div key={doc._id} className="flex gap-2 mt-4">
            <div>
              <img
                className="rounded-full object-cover w-28 h-28"
                width={150}
                src={doc.image}
              />
            </div>
            <div className="mt-4 text-sm">
              <h2>Name: {doc.fullName}</h2>
              <p>Consultation Fee: Rs <span className="text-green-600">{doc.consultationFee}</span></p>
              <p>{doc.phone}</p>
              <button
                className="border-green-500 border-1 text-white rounded-md px-4 py-1 mt-2 hover:bg-green-600"
                onClick={() => handleBook(doc)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" />

          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-[500px] p-4">
              <h2 className="text-2xl font-bold mb-5 text-green-600">
                Book Appointment
              </h2>

              <form
                action={ESEWA_URL}
                method="POST"
                onSubmit={handleFormSubmit}
                className="space-y-2 text-black"
              >
                <input
                  type="hidden"
                  name="amount"
                  value={selectedDoctor.consultationFee}
                />
                <input type="hidden" name="tax_amount" value="0" />
                <input
                  type="hidden"
                  name="total_amount"
                  value={selectedDoctor.consultationFee}
                />
                <input type="hidden" name="product_service_charge" value="0" />
                <input type="hidden" name="product_delivery_charge" value="0" />
                <input
                  type="hidden"
                  name="transaction_uuid"
                  value={transaction_uuid}
                />
                <input type="hidden" name="product_code" value={ESEWA_PRODUCT_CODE} />
                <input
                  type="hidden"
                  name="success_url"
                  value={`${window.location.origin}/payment-success`}
                />
                <input
                  type="hidden"
                  name="failure_url"
                  value={`${window.location.origin}/payment-failure`}
                />
                <input
                  type="hidden"
                  name="signed_field_names"
                  value="total_amount,transaction_uuid,product_code"
                />
                <input type="hidden" name="signature" value={signature} />

                <div>
                  <label>Doctor Name</label>
                  <input
                    value={selectedDoctor.fullName}
                    readOnly
                    className="w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label>Speciality</label>
                  <input
                    value={selectedDoctor.department}
                    readOnly
                    className="w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label>Consultation Fee</label>
                  <input
                    readOnly
                    value={`Rs ${selectedDoctor.consultationFee}`}
                    className="w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label>Patient Name</label>
                  <input
                    value={user?.name || ""}
                    readOnly
                    className="w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label>Symptoms</label>
                  <textarea
                    className="w-full border rounded p-2"
                    value={displayName}
                    readOnly
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedDoctor(null)}
                    className="bg-gray-300 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Pay with esewa
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SymptomDetail;
