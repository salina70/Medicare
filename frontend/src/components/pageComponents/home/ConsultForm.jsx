import React from "react";

function ConsultForm() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Book an Appointment
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Fill in your details to schedule a consultation.
        </p>
      </div>

      {/* Appointment Form */}
      <form className="space-y-4">
        {/* Patient Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Patient Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                       outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-blue-500"
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>

            <input
              type="tel"
              placeholder="98XXXXXXXX"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
            />
          </div>
        </div>

        {/* Doctor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Doctor
          </label>

          <input
            type="text"
            value="Selected Doctor"
            readOnly
            className="w-full px-4 py-2.5 border border-gray-200
                       bg-gray-100 text-gray-600 rounded-lg"
          />
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Appointment Date
            </label>

            <input
              type="date"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Time
            </label>

            <input
              type="time"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
            />
          </div>
        </div>

        {/* Reason */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reason for Consultation
          </label>

          <select
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                       outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-blue-500"
          >
            <option value="">Select reason</option>
            <option>General Consultation</option>
            <option>Follow-up</option>
            <option>Health Checkup</option>
            <option>Emergency Consultation</option>
            <option>Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Message
          </label>

          <textarea
            rows="3"
            placeholder="Briefly describe your problem..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                       outline-none resize-none focus:ring-2 focus:ring-blue-500
                       focus:border-blue-500"
          />
        </div>

        {/* Fee */}
        <div
          className="flex items-center justify-between bg-blue-50
                        rounded-lg px-4 py-3"
        >
          <span className="text-sm text-gray-600">Consultation Fee</span>

          <span className="font-bold text-blue-600">Rs. 1000</span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700
                     text-white font-semibold py-3 rounded-lg
                     transition duration-200"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default ConsultForm;
