import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className=" flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 ">
      <Search className="text-neutral-500" />

      <input
        value={value}
        onChange={onChange}
        placeholder="Search doctors or specialties..."
        className=" w-full bg-transparent outline-none text-white placeholder:text-neutral-500 "
      />
    </div>
  );
};

export default SearchBar;
