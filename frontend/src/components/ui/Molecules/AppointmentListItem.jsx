const AppointmentListItem = ({ doctor, specialty, date, time }) => {
  return (
    <div className="p-5">
      <h3 className="font-medium">{doctor}</h3>

      <p className="text-sm text-neutral-400">{specialty}</p>

      <p className="mt-2 text-sm">
        {date} • {time}
      </p>
    </div>
  );
};

export default AppointmentListItem;
