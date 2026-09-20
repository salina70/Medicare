import { useState } from "react";
import "./AddDepartment.css";

const AddDepartment = () => {
  const [formData, setFormData] = useState({
    icon: "",
    name: "",
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

    if (!formData.icon || !formData.name) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:8000/api/departments/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
console.log(response)
      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to add department");
        return;
      }

      setMessage("Department added successfully!");

      setFormData({
        icon: "",
        name: "",
      });
    } catch (error) {
      console.error(error);
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-department-page">

      <div className="department-card">

        <div className="department-header">
          <h1>Add Department</h1>
          <p>
            Create a new department for your hospital
          </p>
        </div>

        {message && (
          <div className="success-message">
            {message}
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Icon */}
          <div className="form-group">

            <label htmlFor="icon">
              Department Icon
            </label>

            <input
              type="text"
              id="icon"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              placeholder="Example: 🫀"
            />

            <small>
              Enter an emoji or icon name
            </small>

          </div>


          {/* Department Name */}
          <div className="form-group text-black">

            <label htmlFor="name">
              Department Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Example: Cardiology"
            />

          </div>


          {/* Preview */}
          {formData.name && (
            <div className="department-preview">

              <div className="preview-icon">
                {formData.icon || "🏥"}
              </div>

              <div>
                <span>Department</span>
                <h3>{formData.name}</h3>
              </div>

            </div>
          )}


          {/* Buttons */}
          <div className="button-container">

            <button
              type="button"
              className="cancel-btn"
              onClick={() =>
                setFormData({
                  icon: "",
                  name: "",
                })
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="add-btn"
              disabled={loading}
            >
              {loading
                ? "Adding..."
                : "Add Department"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddDepartment;
