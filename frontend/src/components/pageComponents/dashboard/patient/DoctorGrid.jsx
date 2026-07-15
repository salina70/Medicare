import DoctorCard from "../../../ui/Molecules/DoctorCard";

const DoctorGrid = ({ doctors }) => {
  return (
    <div className=" grid gap-6 md:grid-cols-2 xl:grid-cols-3 ">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorGrid;
