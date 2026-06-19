import Doctor from "../models/doctorModel.js";

export const getDoctorsBySpecialist = async (req, res) => {
  try {
    const doctors = await Doctor.find({
      specialist: req.params.specialist,
    });

    res.json(doctors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const { specialist } = req.query;

    let filter = {};
    if (specialist) {
      filter.specialist = specialist;
    }
    const doctors = await Doctor.find(filter);

    res.status(200).json({
      success: true,
      count: doctors.length,
      doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDoctors = async (req, res) => {
  try {
    const { specialist } = req.query;

    let filter = {};
    if (specialist) {
      filter.specialist = specialist;
    }

    const doctors = await Doctor.find({ specialist });

    res.status(200).json({
      success: true,
      count: doctors.length,
      doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
