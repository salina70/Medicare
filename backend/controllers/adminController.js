import Appointment from "../models/appointmentModel.js";
import User from "../models/authUser.js";
import Doctor from "../models/doctorModel.js";

const buildRegistrationGraph = async () => {
  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const start = new Date(end);
  start.setDate(start.getDate() - 6);
  start.setHours(0, 0, 0, 0);

  const registrations = await User.aggregate([
    {
      $match: {
        isAdmin: { $ne: true },
        createdAt: { $gte: start, $lte: end },
      },
    },
    {
      $group: {
        _id: {
          $dateToString: {
            format: "%Y-%m-%d",
            date: "$createdAt",
          },
        },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  const countByDate = registrations.reduce((acc, item) => {
    acc[item._id] = item.count;
    return acc;
  }, {});

  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    const key = day.toISOString().slice(0, 10);

    return {
      date: key,
      label: day.toLocaleDateString("en-US", { weekday: "short" }),
      count: countByDate[key] || 0,
    };
  });
};

export const getDashboard = async (req, res) => {
  try {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const [
      latestPatients,
      patientRegistrationGraph,
      todayAppointments,
      totalPatients,
      totalDoctors,
      pendingAppointments,
    ] = await Promise.all([
      User.find({ isAdmin: { $ne: true } })
        .select("name email createdAt")
        .sort({ createdAt: -1 })
        .limit(5),
      buildRegistrationGraph(),
      Appointment.find({
        dateTime: { $gte: todayStart, $lte: todayEnd },
      })
        .populate("patient_id", "name email")
        .populate("doctor_id", "name specialist")
        .sort({ dateTime: 1 })
        .limit(10),
      User.countDocuments({ isAdmin: { $ne: true } }),
      Doctor.countDocuments(),
      Appointment.countDocuments({ status: "Pending" }),
    ]);

    res.status(200).json({
      success: true,
      summary: {
        totalPatients,
        totalDoctors,
        pendingAppointments,
        appointmentsToday: todayAppointments.length,
      },
      latestPatients,
      patientRegistrationGraph,
      todayAppointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
