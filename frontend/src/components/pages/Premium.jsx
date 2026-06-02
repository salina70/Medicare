import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Premium() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="px-6 py-10 text-center">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 hover:text-white text-sm text-gray-600 hover:text-black"
        >
          ← Back
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-3">
          Upgrade to <span className="text-green-600">Premium</span>
        </h1>
        <p className="text-gray-500 mb-10">
          Get better healthcare experience with exclusive features
        </p>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Basic</h2>
            <p className="text-3xl font-bold mb-4">$5/mo</p>
            <ul className="text-sm text-gray-500 mb-6 space-y-2">
              <li>✔ 1 Video Consultation</li>
              <li>✔ Basic Support</li>
              <li>✔ Health Tips</li>
            </ul>
            <button className="bg-gray-200 px-4 py-2 rounded text-black">
              Choose Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-green-600 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Pro</h2>
            <p className="text-3xl font-bold mb-4">$12/mo</p>
            <ul className="text-sm text-gray-500 mb-6 space-y-2">
              <li>✔ Unlimited Consultations</li>
              <li>✔ Priority Support</li>
              <li>✔ Free Health Reports</li>
            </ul>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Most Popular
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Premium+</h2>
            <p className="text-3xl font-bold mb-4">$20/mo</p>
            <ul className="text-sm text-gray-500 mb-6 space-y-2">
              <li>✔ Personal Doctor</li>
              <li>✔ 24/7 Support</li>
              <li>✔ Free Medicines Delivery</li>
            </ul>
            <button className="bg-gray-200 px-4 py-2 rounded text-black">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Premium;
