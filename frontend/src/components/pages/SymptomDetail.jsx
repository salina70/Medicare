import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

function SymptomDetail() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [transaction_uuid, setTransactionUuid] = useState(uuidv4());
  const [doctor, setDoctor] = useState([]);
  // const { name } = useParams();
  const [searchParam] = useSearchParams();
  const name = searchParam.get("name");

  // const product_code = "EPAYTEST"
  // const message = `total_amount=${"as"},transaction_uu id=${transaction_uuid},product_code=${product_code}`
  // const transaction_uuid = uuidv4();
  // const hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
  // const Signature = CryptoJS.enc.Base64.stringify(hash);

  // const handleSubmit = async () => {
  //   const {data:appointment} = await axios.post('/appointment', {
  //     doctorId, date, patient_id, description
  //   })
  //   const {data:transaction} = await axios.post('/transction', {appointment_id: appointment.id, status: "new"})
  //   const {data: payment} = await handlePayement({total_amount, transaction_id: transaction.id, product_code: appointment.id})
  //   if(payment.status === 'success'){
  //   await axios.put(`/transction/${transaction.id}`, {status: 'completed'})

  //   alert("payment successfull")} else
  //     await axios.put(`/transction/${transaction.id}`, {status: 'failed', comments: payment.message})
  //     alert("payment could not be made")
  // }

  // const handlePayment = async (allDetils) => {
  //   await axios.post("esewa_url", {
  // message:  `total_amount=${allDetils.total},transaction_uuid=${transaction_uuid},product_code=${product_code}`
  //   })
  // }

  // const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const displayName = name
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  useEffect(() => {
    const fetchDoctor = async () => {
      const res = await axios.get("http://localhost:8000/api/doctors");
      console.log(res.data.doctors);
      setDoctor(res.data.doctors);
    };
    fetchDoctor();
  }, []);

  console.log(doctor);
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  const product_code = "EPAYTEST";
  const secret = "8gBm/:&EnhH.1/q";

  const total_amount = selectedDoctor?.consultationFee || 0;

  const message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;

  const hash = CryptoJS.HmacSHA256(message, secret);
  const signature =
    total_amount > 0
      ? CryptoJS.enc.Base64.stringify(
          CryptoJS.HmacSHA256(
            `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`,
            secret,
          ),
        )
      : "";
  console.log(signature);
  const handleBook = (doc) => {
    const uuid = uuidv4();
    setTransactionUuid(uuid);
    setSelectedDoctor(doc);
  };
  return (
    <>
      <h1 className="text-2xl mt-3 ml-3 font-bold">
        Available doctors for{" "}
        <span className="text-green-600">{displayName}</span>
      </h1>

      <div className="p-5 flex gap-14 justify-center">
        {doctor.map((doc) => {
          console.log(doc);
          return (
            <div key={doc._id} className="flex gap-2 mt-4">
              <div>
                <img
                  className="rounded-full object-cover w-28 h-28"
                  width={150}
                  src={`http://localhost:8000/uploads/${doc.image}`}
                />
              </div>
              <div className="mt-4 text-sm">
                {" "}
                <h2>Name: {doc.fullName}</h2>
                <p>Consultation Fee: Rs {doc.consultationFee}</p>
                <p>{doc.phone}</p>
                <button
                  className="bg-green-500 text-black rounded-md px-4 py-1 mt-2 hover:bg-green-600"
                  onClick={() => {
                    handleBook(doc);
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedDoctor && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" />

          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg   shadow-xl w-[500px] p-4">
              <h2 className="text-2xl font-bold mb-5 text-green-600">
                Book Appointment
              </h2>

              <form
                action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
                method="POST"
                className="space-y-2 text-black"
              >
                <input
                  type="hidden"
                  name="amount"
                  value={selectedDoctor.consultationFee}
                />

                <input type="hidden" name="tax_amount" value="0" />

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
                    value={selectedDoctor.speciality}
                    readOnly
                    className="w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label>Consultation Fee</label>
                  <input
                    readOnly
                    value={selectedDoctor.consultationFee}
                    className="w-full border rounded p-2"
                  />

                  <input
                    type="hidden"
                    name="total_amount"
                    value={selectedDoctor.consultationFee}
                  />
                </div>

                <div>
                  <label>Patient Name</label>
                  <input
                    placeholder="Enter your name"
                    className="w-full border rounded p-2"
                    value={user.name}
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
                <input type="hidden" name="product_service_charge" value="0" />

                <input type="hidden" name="product_delivery_charge" value="0" />
                <div hidden>
                  <input
                    type="hidden"
                    id="transaction_uuid"
                    value={transaction_uuid}
                    name="transaction_uuid"
                    required
                  />
                  <input
                    type="hidden"
                    id="product_code"
                    name="product_code"
                    value={product_code}
                    required
                  />
                  <input
                    type="hidden"
                    id="success_url"
                    name="success_url"
                    value="http://localhost:5173/payment-success"
                    required
                  />
                  <input
                    type="hidden"
                    id="failure_url"
                    name="failure_url"
                    value="http://localhost:5173/payment-failure"
                    required
                  />
                  <input type="hidden" name="signature" value={signature} />
                  <input
                    type="hidden"
                    id="signed_field_names"
                    name="signed_field_names"
                    value="total_amount,transaction_uuid,product_code"
                    required
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
                    value="submit"
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
