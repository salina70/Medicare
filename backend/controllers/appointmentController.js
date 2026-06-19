import Appointment from "../models/appointmentModel.js";

export const createAppointment = async (req, res) => {
  try {
    const { doctor_id, patient_id, dateTime, description, age, email, phone } =
      req.body;
    console.log(req.body);

    const appointment = await Appointment.create({
      doctor_id,
      patient_id,
      dateTime,
      description,
      age,
      email,
      phone,
      status: "Pending",
    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
    console.log(appointments);
    res.status(200).json({
      success: true,
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      { new: true },
    );

    res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
