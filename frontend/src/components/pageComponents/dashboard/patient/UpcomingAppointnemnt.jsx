import AppointmentListItem from "../../../ui/Molecules/AppointmentListItem";

const UpcomingVisits = ({ appointments }) => {
  return (
    <section
      className="
rounded-xl border border-neutral-800
bg-neutral-900
"
    >
      <h2 className="border-b border-neutral-800 p-5 font-semibold">
        Upcoming Visits
      </h2>

      {appointments.map((item, index) => (
        <AppointmentListItem key={index} {...item} />
      ))}
    </section>
  );
};

export default UpcomingVisits;
