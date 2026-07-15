import QuickActionCard from "../../../ui/Molecules/QuickActionCard";

const QuickActions = ({ actions }) => {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {actions.map((action) => (
          <QuickActionCard key={action.title} {...action} />
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
