import { CalendarDays, Clock, MapPin, Stethoscope } from "lucide-react";
import StatusBadge from "../../../ui/atoms/StatusBadge";

const NextAppointment = ({ appointment }) => {
  return (
    <section className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-neutral-300">
          Next Appointment
        </h2>

        <StatusBadge>{appointment.status}</StatusBadge>
      </div>

      {/* Main */}
      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/20">
          <Stethoscope className="h-5 w-5 text-green-400" />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-white">
            {appointment.doctor}
          </h3>

          <p className="text-sm text-neutral-400">{appointment.specialty}</p>
        </div>

        <div className="text-right">
          <div className="flex items-center justify-end gap-1.5 text-sm text-neutral-200">
            <CalendarDays className="h-3.5 w-3.5 text-green-400" />
            {appointment.date}
          </div>

          <div className="mt-1 flex items-center justify-end gap-1.5 text-sm text-neutral-400">
            <Clock className="h-3.5 w-3.5 text-green-400" />
            {appointment.time}
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-3 text-sm text-neutral-400">
        <MapPin className="h-4 w-4 text-green-400" />
        {appointment.location}
      </div>
    </section>
  );
};

export default NextAppointment;
