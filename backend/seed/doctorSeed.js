import mongoose from "mongoose";
import Doctor from "../models/doctorModel.js";
import Department from "../models/departmentmodel.js";

const seed = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://salinamainali_db_user:mern123@cluster0.t0sres5.mongodb.net/mern",
    );
    console.log("MongoDB connected");

    // Get departments from database
    const cardiology = await Department.findOne({ name: "Cardiology" });
    const dermatology = await Department.findOne({ name: "Dermatology" });
    const neurology = await Department.findOne({ name: "Neurology" });
    const orthopedic = await Department.findOne({ name: "Orthopedics" });
    const pediatrician = await Department.findOne({ name: "Pediatrics" });
    const ophthalmology = await Department.findOne({ name: "Ophthalmology" });
    const general = await Department.findOne({ name: "General Medicine" });

    // Make sure departments exist
    if (
      !cardiology ||
      !dermatology ||
      !neurology ||
      !orthopedic ||
      !pediatrician ||
      !ophthalmology ||
      !general
    ) {
      throw new Error(
        "One or more departments not found. Seed departments first.",
      );
    }

    const doctorsData = [
      {
        fullName: "Rita Phuyal",
        email: "rita.phuyal@gmail.com",
        phone: "+977 9841234567",
        gender: "Female",
        age: 44,
        department: cardiology._id,
        experience: 12,
        qualification: "MD in Cardiology",
        consultationFee: 1000,
        address: "Kathmandu",
        description:
          "Specialist in heart diseases, hypertension, and cardiovascular health.",
        image:
          "https://img.magnific.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
        rating: 4.8,
      },

      {
        fullName: "Arjun Sharma",
        email: "arjun.sharma@gmail.com",
        phone: "+977 9812345678",
        gender: "Male",
        age: 48,
        department: cardiology._id,
        experience: 15,
        qualification: "MD in Cardiology",
        consultationFee: 1500,
        address: "Lalitpur",
        description:
          "Experienced cardiologist specializing in cardiovascular diseases.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5A_cQ9IEjkcPyF5gF6uWaNxteIMSmwDRtMabT44K3cg&s",
        rating: 4.9,
      },

      {
        fullName: "Sneha Gurung",
        email: "sneha.gurung@gmail.com",
        phone: "+977 9801234567",
        gender: "Female",
        age: 39,
        department: dermatology._id,
        experience: 9,
        qualification: "MD in Dermatology",
        consultationFee: 800,
        address: "Kathmandu",
        description:
          "Specialist in skin, hair, acne, and other dermatological conditions.",
        image:
          "https://t3.ftcdn.net/jpg/06/48/69/42/360_F_648694278_haC94bdL26EedqLMIbMpLACqzxwuvq4f.jpg",
        rating: 4.7,
      },

      {
        fullName: "Nabin Thapa",
        email: "nabin.thapa@gmail.com",
        phone: "+977 9861234567",
        gender: "Male",
        age: 42,
        department: dermatology._id,
        experience: 11,
        qualification: "MD in Dermatology",
        consultationFee: 900,
        address: "Bhaktapur",
        description:
          "Provides treatment for skin allergies, acne, and chronic skin conditions.",
        image:
          "https://i.pinimg.com/736x/ac/34/1f/ac341f1306097c9d79e6d6b7236f884a.jpg",
        rating: 4.6,
      },

      {
        fullName: "Bikash Karki",
        email: "bikash.karki@gmail.com",
        phone: "+977 9845671234",
        gender: "Male",
        age: 46,
        department: neurology._id,
        experience: 14,
        qualification: "MD in Neurology",
        consultationFee: 1400,
        address: "Kathmandu",
        description:
          "Specialist in neurological disorders, migraines, and nervous system diseases.",
        image:
          "https://i.pinimg.com/474x/15/5c/c7/155cc7e7ce769fa90b900a83e8f5584a.jpg",
        rating: 4.9,
      },

      {
        fullName: "Anita Rai",
        email: "anita.rai@gmail.com",
        phone: "+977 9815672345",
        gender: "Female",
        age: 41,
        department: neurology._id,
        experience: 10,
        qualification: "MD in Neurology",
        consultationFee: 1200,
        address: "Lalitpur",
        description:
          "Experienced neurologist treating headaches, epilepsy, and neurological conditions.",
        image:
          "https://i.pinimg.com/736x/01/bc/83/01bc83577f3555e523ac2df3770b67b6.jpg",
        rating: 4.7,
      },

      {
        fullName: "Suman Adhikari",
        email: "suman.adhikari@gmail.com",
        phone: "+977 9804567890",
        gender: "Male",
        age: 45,
        department: orthopedic._id,
        experience: 13,
        qualification: "MS in Orthopedics",
        consultationFee: 1100,
        address: "Kathmandu",
        description:
          "Specialist in bone, joint, muscle, and sports-related injuries.",
        image:
          "https://i.pinimg.com/1200x/c9/ef/a2/c9efa22d3d889cc91f5d988bedbe1430.jpg",
        rating: 4.8,
      },

      {
        fullName: "Mina Shrestha",
        email: "mina.shrestha@gmail.com",
        phone: "+977 9823456789",
        gender: "Female",
        age: 38,
        department: orthopedic._id,
        experience: 8,
        qualification: "MS in Orthopedic Surgery",
        consultationFee: 950,
        address: "Bhaktapur",
        description:
          "Provides treatment for fractures, arthritis, and joint problems.",
        image:
          "https://i.pinimg.com/236x/ca/f4/d7/caf4d7219af162ef8156bbaa8f0d9034.jpg",
        rating: 4.6,
      },

      {
        fullName: "Prakash Bista",
        email: "prakash.bista@gmail.com",
        phone: "+977 9846789012",
        gender: "Male",
        age: 40,
        department: pediatrician._id,
        experience: 9,
        qualification: "MD in Pediatrics",
        consultationFee: 700,
        address: "Kathmandu",
        description:
          "Pediatrician specializing in children's health and development.",
        image:
          "https://i.pinimg.com/1200x/cb/f1/04/cbf104baf948c6ffe2b81f8faa015b11.jpg",
        rating: 4.8,
      },

      {
        fullName: "Sarita KC",
        email: "sarita.kc@gmail.com",
        phone: "+977 9817890123",
        gender: "Female",
        age: 36,
        department: pediatrician._id,
        experience: 7,
        qualification: "MD in Pediatrics",
        consultationFee: 650,
        address: "Lalitpur",
        description:
          "Provides healthcare services for infants, children, and teenagers.",
        image:
          "https://i.pinimg.com/736x/49/d2/fb/49d2fb2b14de40cc2da3f01fbfca52ad.jpg",
        rating: 4.7,
      },

      {
        fullName: "Rajendra Shahi",
        email: "rajendra.shahi@gmail.com",
        phone: "+977 9807890123",
        gender: "Male",
        age: 50,
        department: ophthalmology._id,
        experience: 18,
        qualification: "MD in Ophthalmology",
        consultationFee: 1000,
        address: "Kathmandu",
        description:
          "Experienced eye specialist providing diagnosis and treatment of eye diseases.",
        image:
          "https://i.pinimg.com/736x/6e/09/b9/6e09b97eaa6efe8817667acae9e5cb2c.jpg",
        rating: 4.9,
      },

      {
        fullName: "Puja Tamang",
        email: "puja.tamang@gmail.com",
        phone: "+977 9828901234",
        gender: "Female",
        age: 37,
        department: ophthalmology._id,
        experience: 8,
        qualification: "MD in Ophthalmology",
        consultationFee: 850,
        address: "Kathmandu",
        description:
          "Specialist in eye infections, vision problems, and routine eye care.",
        image:
          "https://i.pinimg.com/736x/34/54/5f/34545f085e2a8e0722a4951a66b33eda.jpg",
        rating: 4.6,
      },

      {
        fullName: "Deepak Poudel",
        email: "deepak.poudel@gmail.com",
        phone: "+977 9849012345",
        gender: "Male",
        age: 43,
        department: general._id,
        experience: 11,
        qualification: "MBBS, MD",
        consultationFee: 500,
        address: "Kathmandu",
        description:
          "General physician providing diagnosis and treatment for common illnesses.",
        image:
          "https://i.pinimg.com/736x/19/ef/b9/19efb9a8832cde291eaa7729c15dd448.jpg",
        rating: 4.5,
      },

      {
        fullName: "Kabita Joshi",
        email: "kabita.joshi@gmail.com",
        phone: "+977 9810123456",
        gender: "Female",
        age: 40,
        department: general._id,
        experience: 10,
        qualification: "MBBS, MD",
        consultationFee: 550,
        address: "Lalitpur",
        description:
          "General physician specializing in preventive healthcare and common diseases.",
        image:
          "https://i.pinimg.com/736x/8e/76/9b/8e769ba017b51f55473378073b746d3b.jpg",
        rating: 4.7,
      },
    ];

    await Doctor.deleteMany({});

    await Doctor.create(doctorsData);

    console.log("Doctors seeded successfully!");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding doctors:", error);
    process.exit(1);
  }
};

seed();
