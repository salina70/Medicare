import Doctor from "../models/doctorModel.js";
import bcrypt from "bcrypt";

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
    const { specialist, search } = req.query;

    let filter = {};
    if (specialist) {
      filter.specialist = specialist;
    }
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { specialist: { $regex: search, $options: "i" } },
        { department: { $regex: search, $options: "i" } },
      ];
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

export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      success: true,
      doctor,
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

export const createDoctor = async (req, res) => {
  try {
    const {
      fullName,
      name,
      email,
      phone,
      gender,
      age,
      specialty,
      specialist,
      department,
      experience,
      qualification,
      consultationFee,
      address,
      description,
      image,
      password,
    } = req.body;

    const doctorName = (name || fullName || "").trim();
    const doctorSpecialist = (specialist || specialty || "").trim();

    if (!doctorName || !email || !doctorSpecialist || !description) {
      return res.status(400).json({
        success: false,
        message: "Name, email, specialist, and description are required",
      });
    }

    const existingDoctor = await Doctor.findOne({ email: email.toLowerCase() });
    if (existingDoctor) {
      return res.status(409).json({
        success: false,
        message: "Doctor with this email already exists",
      });
    }

    const doctorData = {
      name: doctorName,
      email,
      phone,
      gender,
      age: age === "" ? null : age,
      specialist: doctorSpecialist,
      department,
      experience,
      qualification,
      consultationFee,
      address,
      description,
      image,
    };

    if (password) {
      doctorData.password = await bcrypt.hash(password, 10);
    }

    const doctor = await Doctor.create(doctorData);

    res.status(201).json({
      success: true,
      message: "Doctor added successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const {
      fullName,
      name,
      specialty,
      specialist,
      password,
      ...rest
    } = req.body;

    const update = {
      ...rest,
    };

    if (name || fullName) update.name = name || fullName;
    if (specialist || specialty) update.specialist = specialist || specialty;
    if (rest.age === "") update.age = null;
    if (password) update.password = await bcrypt.hash(password, 10);

    const doctor = await Doctor.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Doctor updated successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
