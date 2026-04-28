import React from 'react'

function Howitworks() {
  return (
    <div className="bg-gray-950 w-full pb-16 mb-12 mt-20 text-white">

      <h3 className="text-3xl text-center pt-10 pb-10 font-semibold">
        How it works?
      </h3>

      <div className="flex justify-center gap-10 px-6">

        {/* Step 1 */}
        <div className="bg-gray-900 p-6 rounded-xl w-60 text-center shadow-md hover:scale-105 transition">
          <i className="fa-solid fa-user-plus text-green-400 text-3xl mb-3"></i>
          <h4 className="font-semibold">Create an account</h4>
          <p className="text-sm text-gray-400 mt-2">
            Sign up easily using email or phone.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-900 p-6 rounded-xl w-60 text-center shadow-md hover:scale-105 transition">
          <i className="fa-solid fa-magnifying-glass text-green-400 text-3xl mb-3"></i>
          <h4 className="font-semibold">Search doctors</h4>
          <p className="text-sm text-gray-400 mt-2">
            Find specialists based on symptoms.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-900 p-6 rounded-xl w-60 text-center shadow-md hover:scale-105 transition">
          <i className="fa-solid fa-calendar-check text-green-400 text-3xl mb-3"></i>
          <h4 className="font-semibold">Book appointment</h4>
          <p className="text-sm text-gray-400 mt-2">
            Choose time and confirm instantly.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-gray-900 p-6 rounded-xl w-60 text-center shadow-md hover:scale-105 transition">
          <i className="fa-solid fa-user-doctor text-green-400 text-3xl mb-3"></i>
          <h4 className="font-semibold">Get consultation</h4>
          <p className="text-sm text-gray-400 mt-2">
            Talk with doctor online or offline.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Howitworks