import { useEffect, useMemo, useState } from "react";
import { Edit, Eye, Plus, Search, Trash2, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAxios } from "../../lib/provider/axios";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  specialist: "",
  department: "",
  experience: "",
  qualification: "",
  consultationFee: "",
  address: "",
  description: "",
  image: "",
  isActive: true,
};

function toForm(doctor) {
  return {
    name: doctor.name || "",
    email: doctor.email || "",
    phone: doctor.phone || "",
    gender: doctor.gender || "",
    specialist: doctor.specialist || "",
    department: doctor.department || "",
    experience: doctor.experience ?? "",
    qualification: doctor.qualification || "",
    consultationFee: doctor.consultationFee ?? "",
    address: doctor.address || "",
    description: doctor.description || "",
    image: doctor.image || "",
    isActive: doctor.isActive ?? true,
  };
}

export default function AdminDoctors() {
 
  const { axios } = useAxios();
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const nav = useNavigate()
 
  const [currentPage, setCurrentPage] = useState(1);
const doctorsPerPage = 5;

  useEffect(() => {
    let ignore = false;

    axios
      .get("/doctors")
      .then((res) => {
        console.log(res.data)
        if (!ignore) setDoctors(res.data.doctors || []);
      })
      .catch((error) => {
        if (!ignore) {
          alert(error.response?.data?.message || "Unable to load doctors");
        }
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
    // useAxios creates the client for this component; this load should run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredDoctors = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return doctors;

    return doctors.filter((doctor) =>
      [doctor.name, doctor.email, doctor.specialist, doctor.department]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(term)),
    );
  }, [doctors, search]);
  console.log(filteredDoctors)

  const openEdit = (doctor) => {
    setEditingDoctor(doctor);
    setForm(toForm(doctor));
  };
console.log(editingDoctor)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      const res = await axios.patch(`/doctors/${editingDoctor._id}`, form);
      setDoctors((prev) =>
        prev.map((doctor) =>
          doctor._id === editingDoctor._id ? res.data.doctor : doctor,
        ),
      );
      setEditingDoctor(null);
    } catch (error) {
      alert(error.response?.data?.message || "Unable to update doctor");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (doctor) => {
    const ok = window.confirm(`Delete ${doctor.name}?`);
    if (!ok) return;

    try {
      await axios.delete(`/doctors/${doctor._id}`);
      setDoctors((prev) => prev.filter((item) => item._id !== doctor._id));
    } catch (error) {
      alert(error.response?.data?.message || "Unable to delete doctor");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Doctors</h1>
          <p className="mt-1 text-sm text-gray-400">
            Manage doctor profiles available for patient booking.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-white outline-none sm:w-72"
            />
          </div>

          <button
           onClick={()=>nav("/dashboard/add-doctor")}
         
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
          >
            <Plus size={18} />
            Add Doctor
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full text-left text-gray-200">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-4">Doctor</th>
              <th className="p-4">Specialty</th>
              <th className="p-4">Experience</th>
              <th className="p-4">Fee</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredDoctors.map((doctor) => (
              <tr
                key={doctor._id}
                className="border-t border-gray-700 hover:bg-gray-800"
              >
                <td className="p-4">
                  <div className="font-medium">{doctor.name}</div>
                  <div className="text-sm text-gray-400">{doctor.email}</div>
                </td>
                <td className="p-4">{doctor.specialist}</td>
                <td className="p-4">{doctor.experience || 0} years</td>
                <td className="p-4">
                  {doctor.consultationFee
                    ? `Rs ${doctor.consultationFee}`
                    : "N/A"}
                </td>
                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      doctor.isActive
                        ? "bg-green-900 text-green-300"
                        : "bg-red-900 text-red-300"
                    }`}
                  >
                    {doctor.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      type="button"
                      title="View doctor"
                      onClick={() => setSelectedDoctor(doctor)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      type="button"
                      title="Edit doctor"
                      onClick={() => openEdit(doctor)}
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      type="button"
                      title="Delete doctor"
                      onClick={() => handleDelete(doctor)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!loading && filteredDoctors.length === 0 && (
          <div className="py-10 text-center text-gray-400">
            No doctors found
          </div>
        )}

        {loading && (
          <div className="py-10 text-center text-gray-400">
            Loading doctors...
          </div>
        )}
      </div>

      {selectedDoctor && (
        <DoctorDetailsModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}

      {editingDoctor && (
        <EditDoctorModal
          form={form}
          saving={saving}
          onChange={handleChange}
          onSubmit={handleUpdate}
          onClose={() => setEditingDoctor(null)}
        />
      )}
    </div>
  );
}

function DoctorDetailsModal({ doctor, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-lg rounded-lg border border-gray-700 bg-gray-900 p-6 text-white">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-red-400"
        >
          <X size={20} />
        </button>

        <h2 className="mb-4 text-2xl font-bold">{doctor.name}</h2>
        <div className="grid gap-3 text-sm">
          <p>
            <strong>Email:</strong> {doctor.email}
          </p>
          <p>
            <strong>Phone:</strong> {doctor.phone || "N/A"}
          </p>
          <p>
            <strong>Specialty:</strong> {doctor.specialist}
          </p>
          <p>
            <strong>Department:</strong> {doctor.department || "N/A"}
          </p>
          <p>
            <strong>Qualification:</strong> {doctor.qualification || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {doctor.address || "N/A"}
          </p>
          <p>
            <strong>Description:</strong> {doctor.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function EditDoctorModal({ form, saving, onChange, onSubmit, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <form
        onSubmit={onSubmit}
        className="relative grid max-h-[90vh] w-full max-w-3xl grid-cols-1 gap-4 overflow-y-auto rounded-lg border border-gray-700 bg-gray-900 p-6 text-white md:grid-cols-2"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-red-400"
        >
          <X size={20} />
        </button>

        <h2 className="md:col-span-2 text-2xl font-bold">Edit Doctor</h2>

        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Name"
          className="rounded border border-gray-700 bg-gray-800 p-3"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="Email"
          className="rounded border border-gray-700 bg-gray-800 p-3"
          required
        />
        <input
          name="phone"
          value={form.phone}
          onChange={onChange}
          placeholder="Phone"
          className="rounded border border-gray-700 bg-gray-800 p-3"
        />
        <select
          name="gender"
          value={form.gender}
          onChange={onChange}
          className="rounded border border-gray-700 bg-gray-800 p-3"
        >
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input
          name="specialist"
          value={form.specialist}
          onChange={onChange}
          placeholder="Specialty"
          className="rounded border border-gray-700 bg-gray-800 p-3"
          required
        />
        <input
          name="department"
          value={form.department}
          onChange={onChange}
          placeholder="Department"
          className="rounded border border-gray-700 bg-gray-800 p-3"
        />
        <input
          name="experience"
          type="number"
          value={form.experience}
          onChange={onChange}
          placeholder="Experience"
          className="rounded border border-gray-700 bg-gray-800 p-3"
        />
        <input
          name="consultationFee"
          type="number"
          value={form.consultationFee}
          onChange={onChange}
          placeholder="Consultation Fee"
          className="rounded border border-gray-700 bg-gray-800 p-3"
        />
        <input
          name="qualification"
          value={form.qualification}
          onChange={onChange}
          placeholder="Qualification"
          className="rounded border border-gray-700 bg-gray-800 p-3"
        />
        <input
          name="image"
          value={form.image}
          onChange={onChange}
          placeholder="Image URL"
          className="rounded border border-gray-700 bg-gray-800 p-3"
        />
        <textarea
          name="address"
          value={form.address}
          onChange={onChange}
          placeholder="Address"
          className="rounded border border-gray-700 bg-gray-800 p-3 md:col-span-2"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Description"
          className="rounded border border-gray-700 bg-gray-800 p-3 md:col-span-2"
          required
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isActive"
            checked={form.isActive}
            onChange={onChange}
          />
          Active for booking
        </label>

        <div className="flex justify-end gap-3 md:col-span-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-gray-600 px-5 py-2"
          >
            Cancel
          </button>
          <button
            disabled={saving}
            className="rounded bg-green-600 px-5 py-2 text-white disabled:bg-green-400"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
