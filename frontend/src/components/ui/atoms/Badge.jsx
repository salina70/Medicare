const Badge = ({ children }) => {
  return (
    <span
      className="
      rounded-full 
      bg-green-500/20 
      px-3 py-1
      text-sm 
      text-green-400
    "
    >
      {children}
    </span>
  );
};

export default Badge;
