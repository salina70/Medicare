const specialties = [
  "All",
  "Cardiologist",
  "Dermatologist",
  "General Physician",
];

const DoctorFilters = ({ selected, setSelected }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {specialties.map((item) => (
        <button
          key={item}
          onClick={() => setSelected(item)}
          className={` rounded-lg px-4 py-2 transition ${selected === item ? "bg-green-600 text-white" : "bg-neutral-900 text-neutral-400"} `}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default DoctorFilters;
