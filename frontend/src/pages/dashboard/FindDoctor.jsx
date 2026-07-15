import { useState } from "react";

import SearchBar from "../../components/ui/Molecules/SearchBar";
import DoctorFilters from "../../components/pageComponents/dashboard/patient/DoctorFilter";
import DoctorGrid from "../../components/pageComponents/dashboard/patient/DoctorGrid";
import { doctors } from "../../data/doctor";

const FindDoctors = () => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const filteredDoctors = doctors?.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialty =
      specialty === "All" || doctor.specialty === specialty;

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Find Doctors</h1>

        <p className="mt-2 text-neutral-400">
          Find the right doctor and book your appointment.
        </p>
      </div>

      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

      <DoctorFilters selected={specialty} setSelected={setSpecialty} />

      <DoctorGrid doctors={filteredDoctors} />
    </div>
  );
};

export default FindDoctors;
