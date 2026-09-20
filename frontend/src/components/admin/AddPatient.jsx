import { useState } from "react";
import "./AddPatient.css";

const AddPatient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.age ||
      !formData.gender ||
      !formData.password
    ) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:8000/api/patients/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to add patient");
        return;
      }

      setMessage("Patient added successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      password: "",
    });

    setMessage("");
    setError("");
  };

  return (
    <div className="add-patient-page">

      <div className="add-patient-card">

        {/* Header */}
        <div className="patient-header">
          <div className="patient-icon">
            🧑‍⚕️
          </div>

          <div>
            <h1>Add Patient</h1>

            <p>
              Create a new patient account
            </p>
          </div>
        </div>

        {/* Messages */}

        {message && (
          <div className="success-message">
            ✓ {message}
          </div>
        )}

        {error && (
          <div className="error-message">
            ⚠ {error}
          </div>
        )}

        {/* Form */}

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            {/* Name */}
            <div className="form-group full-width">
              <label htmlFor="name">
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter patient's full name"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="patient@example.com"
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            {/* Age */}
            <div className="form-group">
              <label htmlFor="age">
                Age
              </label>

              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                min="0"
                max="120"
              />
            </div>

            {/* Gender */}
            <div className="form-group">
              <label htmlFor="gender">
                Gender
              </label>

              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">
                  Select gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* Password */}
            <div className="form-group full-width">
              <label htmlFor="password">
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create patient password"
              />

              <small>
                Password will be securely encrypted.
              </small>
            </div>

          </div>

          {/* Buttons */}

          <div className="button-container">

            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="add-btn"
              disabled={loading}
            >
              {loading
                ? "Adding Patient..."
                : "Add Patient"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddPatient;
