const ActivityItem = ({ title, description, time }) => {
  return (
    <div className="p-5">
      <h3 className="font-medium">{title}</h3>

      <p className="mt-1 text-sm text-neutral-400">{description}</p>

      <span className="text-xs text-neutral-500">{time}</span>
    </div>
  );
};

export default ActivityItem;
