import { MapPin, Star, Clock } from "lucide-react";
import Badge from "../atoms/Badge";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 transition hover:border-green-600/60">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">{doctor.name}</h2>

          <p className="mt-1 text-sm text-neutral-400">{doctor.specialty}</p>
        </div>

        <Badge>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            {doctor.rating}
          </span>
        </Badge>
      </div>

      {/* Details */}
      <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-300">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-green-400" />
          <span>{doctor.experience}y experience</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-green-400" />
          <span>{doctor.location}</span>
        </div>
      </div>

      {/* Availability */}
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm text-neutral-400">Available today</p>

          <p className="text-xs text-green-400">
            {doctor.availability?.length} slots
          </p>
        </div>

        <div className="flex gap-2 overflow-hidden">
          {doctor?.availability?.slice(0, 3).map((time) => (
            <span
              key={time}
              className="rounded-lg bg-neutral-800 px-3 py-1.5 text-xs text-neutral-200"
            >
              {time}
            </span>
          ))}

          {doctor?.availability?.length > 3 && (
            <span className="rounded-lg bg-neutral-800 px-3 py-1.5 text-xs text-neutral-400">
              +{doctor.availability.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* CTA */}
      <button className="mt-5 w-full rounded-xl bg-green-600 py-2.5 text-sm font-medium text-white transition hover:bg-green-700">
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
