import ActivityItem from "../../../ui/Molecules/ActivityItem";

const RecentActivity = ({ items }) => {
  return (
    <section
      className="
rounded-xl border border-neutral-800
bg-neutral-900
"
    >
      <h2 className="border-b border-neutral-800 p-5 font-semibold">
        Recent Activity
      </h2>

      {items.map((item, index) => (
        <ActivityItem key={index} {...item} />
      ))}
    </section>
  );
};

export default RecentActivity;
