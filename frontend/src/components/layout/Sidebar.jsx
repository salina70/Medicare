import { NavLink } from "react-router-dom";

const Sidebar = ({ items }) => {
  return (
    <nav className="flex flex-col gap-2">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard/users"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
              }`
            }
          >
            {Icon && <Icon size={18} />}
            <span>{item.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Sidebar;
