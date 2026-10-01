import mongoose from "mongoose";
import Doctor from "../models/Doctor.js";
import dotenv from "dotenv";
dotenv.config();

const doctors = [
  {
    name: "Dr. Suman Sharma",
    address: "New Baneshwor, Kathmandu",
    email: "suman.sharma@medicare.com",
    contact: "9841000001",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0t2iSYxzlMTJH9OBde7UXvgabHkBxDlV-Per9C-H7w&s=10",
    specialization: "Cardiologist",
    experience: 12,
    education: "MBBS, MD Cardiology",
    gender: "Male",
    availability: [
      {
        day: "Monday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
          { startTime: "14:00", endTime: "17:00" },
        ],
      },
      {
        day: "Wednesday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "13:00" },
        ],
      },
      {
        day: "Friday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "14:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Anita Thapa",
    address: "Maharajgunj, Kathmandu",
    email: "anita.thapa@medicare.com",
    contact: "9841000002",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SYfYyikF5jo6bvbHGRC0f1Dhq59jhTP0BahyqUWH7A&s=10",
    specialization: "Dermatologist",
    experience: 8,
    education: "MBBS, MD Dermatology",
    gender: "Female",
    availability: [
      {
        day: "Tuesday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
          { startTime: "14:00", endTime: "16:00" },
        ],
      },
      {
        day: "Thursday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "15:00" },
        ],
      },
      {
        day: "Saturday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "13:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Rajesh Karki",
    address: "Lalitpur, Nepal",
    email: "rajesh.karki@medicare.com",
    contact: "9841000003",
    profile: "https://randomuser.me/api/portraits/men/41.jpg",
    specialization: "Neurologist",
    experience: 15,
    education: "MBBS, MD Neurology",
    gender: "Male",
    availability: [
      {
        day: "Monday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "13:00" },
        ],
      },
      {
        day: "Thursday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
          { startTime: "15:00", endTime: "18:00" },
        ],
      },
      {
        day: "Saturday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "14:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Priya Shrestha",
    address: "Bhaktapur, Nepal",
    email: "priya.shrestha@medicare.com",
    contact: "9841000004",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZiI3KOADRby-uet2M_zAtNc8L2FEMEO9Ks8wiSsJdlw&s=10",
    specialization: "Pediatrician",
    experience: 10,
    education: "MBBS, MD Pediatrics",
    gender: "Female",
    availability: [
      {
        day: "Monday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
      {
        day: "Wednesday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "18:00" },
        ],
      },
      {
        day: "Friday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "13:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Bikash Adhikari",
    address: "Putalisadak, Kathmandu",
    email: "bikash.adhikari@medicare.com",
    contact: "9841000005",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmh5kIVYAqoVU144hL7GmD6UuqssaSfcwZDUvIKsEKA&s=10",
    specialization: "Dermatologist",
    experience: 14,
    education: "MBBS, MS Orthopedics",
    gender: "Male",
    availability: [
      {
        day: "Tuesday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "13:00" },
        ],
      },
      {
        day: "Thursday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "18:00" },
        ],
      },
      {
        day: "Saturday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Rina Gurung",
    address: "Boudha, Kathmandu",
    email: "rina.gurung@medicare.com",
    contact: "9841000006",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnd5MI0RzZvH6jpTfHPZeras42pFJ_YgJehs7MaFEgg&s=10",
    specialization: "Gynecologist",
    experience: 11,
    education: "MBBS, MD Gynecology",
    gender: "Female",
    availability: [
      {
        day: "Monday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "14:00" },
        ],
      },
      {
        day: "Wednesday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
      {
        day: "Friday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "18:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Nabin Poudel",
    address: "Kalimati, Kathmandu",
    email: "nabin.poudel@medicare.com",
    contact: "9841000007",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4v1ygJEFXP2FVErpsTQr_qaWPXY8kTyttOIfcYPa71w&s=10",
    specialization: "Cardiologist",
    experience: 7,
    education: "MBBS, MD Internal Medicine",
    gender: "Male",
    availability: [
      {
        day: "Sunday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "13:00" },
        ],
      },
      {
        day: "Tuesday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "18:00" },
        ],
      },
      {
        day: "Thursday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "13:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Sneha Rai",
    address: "Chabahil, Kathmandu",
    email: "sneha.rai@medicare.com",
    contact: "9841000008",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7y-qDtuyJLYclo4DfgWmh5bdiXG6nRufR4wxrynouBA&s=10",
    specialization: "ENT Specialist",
    experience: 9,
    education: "MBBS, MS ENT",
    gender: "Female",
    availability: [
      {
        day: "Monday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
      {
        day: "Wednesday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "17:00" },
        ],
      },
      {
        day: "Saturday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "14:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Amit Bhandari",
    address: "Koteshwor, Kathmandu",
    email: "amit.bhandari@medicare.com",
    contact: "9841000009",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpRPPqi4Dv2wNwk4A0YDZGJ4eEa3lSb8ZQU9x9Pun1A&s=10",
    specialization: "Psychiatrist",
    experience: 13,
    education: "MBBS, MD Psychiatry",
    gender: "Male",
    availability: [
      {
        day: "Tuesday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "13:00" },
        ],
      },
      {
        day: "Thursday",
        isAvailable: true,
        slots: [
          { startTime: "15:00", endTime: "18:00" },
        ],
      },
      {
        day: "Friday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Manisha KC",
    address: "Teku, Kathmandu",
    email: "manisha.kc@medicare.com",
    contact: "9841000010",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxySIUPrKICp17OqgoJrdLtVsNQ_dQYS2fZfUe1ymeA&s=10",
    specialization: "Ophthalmologist",
    experience: 8,
    education: "MBBS, MD Ophthalmology",
    gender: "Female",
    availability: [
      {
        day: "Monday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "13:00" },
        ],
      },
      {
        day: "Wednesday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "14:00" },
        ],
      },
      {
        day: "Saturday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Prakash Joshi",
    address: "Dillibazar, Kathmandu",
    email: "prakash.joshi@medicare.com",
    contact: "9841000011",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVY7lBICWYHU1qfvGM_ylwyu9x5CVX9unXogxywoDJQ&s=10",
    specialization: "Gastroenterologist",
    experience: 16,
    education: "MBBS, MD Gastroenterology",
    gender: "Male",
    availability: [
      {
        day: "Tuesday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
      {
        day: "Thursday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "18:00" },
        ],
      },
      {
        day: "Saturday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "14:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Asha Tamang",
    address: "Kalanki, Kathmandu",
    email: "asha.tamang@medicare.com",
    contact: "9841000012",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMcOZRB0B_nNLJlAvChN-ejMQurEW6OsJhX7YnpTIrA&s=10",
    specialization: "Dentist",
    experience: 6,
    education: "BDS, MDS",
    gender: "Female",
    availability: [
      {
        day: "Monday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
      {
        day: "Wednesday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "18:00" },
        ],
      },
      {
        day: "Friday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "14:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Dipak Shahi",
    address: "Maitidevi, Kathmandu",
    email: "dipak.shahi@medicare.com",
    contact: "9841000013",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKnKL3Q-15O2W5sb2Whlg9hm9oCd40elS0j23C_Wv-g&s=10",
    specialization: "Pulmonologist",
    experience: 12,
    education: "MBBS, MD Pulmonology",
    gender: "Male",
    availability: [
      {
        day: "Tuesday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "13:00" },
        ],
      },
      {
        day: "Thursday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "14:00" },
        ],
      },
      {
        day: "Saturday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "18:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Kabita Basnet",
    address: "Sinamangal, Kathmandu",
    email: "kabita.basnet@medicare.com",
    contact: "9841000014",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4EeVZNNXbyXxsUSlmiCy-12ch7cTiCcDDxKGzrVYPlg&s=10",
    specialization: "Endocrinologist",
    experience: 10,
    education: "MBBS, MD Endocrinology",
    gender: "Female",
    availability: [
      {
        day: "Monday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "14:00" },
        ],
      },
      {
        day: "Wednesday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
      {
        day: "Friday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "17:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Ramesh Maharjan",
    address: "Patan, Lalitpur",
    email: "ramesh.maharjan@medicare.com",
    contact: "9841000015",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiW2LPpc0Iw94MSJx2tX5uhAfXJHwb9578g7l45HzB3Q&s=10",
    specialization: "Urologist",
    experience: 14,
    education: "MBBS, MS Urology",
    gender: "Male",
    availability: [
      {
        day: "Tuesday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
      {
        day: "Thursday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "18:00" },
        ],
      },
      {
        day: "Saturday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "13:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Nisha Lama",
    address: "Thamel, Kathmandu",
    email: "nisha.lama@medicare.com",
    contact: "9841000016",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9GktcbDTWAkZ-gcFdoq73rJHTaESjRZ1BE2wBJYq6A&s=10",
    specialization: "Oncologist",
    experience: 17,
    education: "MBBS, MD Oncology",
    gender: "Female",
    availability: [
      {
        day: "Monday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
      {
        day: "Wednesday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "17:00" },
        ],
      },
      {
        day: "Friday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "13:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Sunil Gautam",
    address: "Baneshwor, Kathmandu",
    email: "sunil.gautam@medicare.com",
    contact: "9841000017",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIJ2kta6fBardOAaz6bGayUvk_GLtDHq2UPvC1k4H4A&s",
    specialization: "Nephrologist",
    experience: 11,
    education: "MBBS, MD Nephrology",
    gender: "Male",
    availability: [
      {
        day: "Tuesday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "14:00" },
        ],
      },
      {
        day: "Thursday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
      {
        day: "Saturday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "18:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Sarita Koirala",
    address: "Chandragiri, Kathmandu",
    email: "sarita.koirala@medicare.com",
    contact: "9841000018",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Ru5P03ipzLojKHLhXNUeaUc_kyHTqj28xFjsbyO74w&s=10",
    specialization: "General Physician",
    experience: 9,
    education: "MBBS, MD Internal Medicine",
    gender: "Female",
    availability: [
      {
        day: "Monday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "13:00" },
        ],
      },
      {
        day: "Wednesday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "18:00" },
        ],
      },
      {
        day: "Friday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Arun Khadka",
    address: "Tokha, Kathmandu",
    email: "arun.khadka@medicare.com",
    contact: "9841000019",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-lz11xBPpTEoCAWccUGQymrlvbMc3RJARfgfSeRxOw&s=10",
    specialization: "Surgeon",
    experience: 18,
    education: "MBBS, MS General Surgery",
    gender: "Male",
    availability: [
      {
        day: "Tuesday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "12:00" },
        ],
      },
      {
        day: "Thursday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "17:00" },
        ],
      },
      {
        day: "Saturday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "14:00" },
        ],
      },
    ],
  },

  {
    name: "Dr. Meena Shakya",
    address: "Kirtipur, Kathmandu",
    email: "meena.shakya@medicare.com",
    contact: "9841000020",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKm9YlFxbBDdcrkia4Cf73-lMP51cclONVBRK3koOxXA&s=10",
    specialization: "Physiotherapist",
    experience: 7,
    education: "BPT, MPT",
    gender: "Female",
    availability: [
      {
        day: "Monday",
        isAvailable: true,
        slots: [
          { startTime: "09:00", endTime: "13:00" },
        ],
      },
      {
        day: "Wednesday",
        isAvailable: true,
        slots: [
          { startTime: "10:00", endTime: "14:00" },
        ],
      },
      {
        day: "Friday",
        isAvailable: true,
        slots: [
          { startTime: "14:00", endTime: "18:00" },
        ],
      },
    ],
  },
];

const seedDoctors = async () => {
  try {
    await mongoose.connect("mongodb+srv://salinamainali_db_user:mern123@cluster0.t0sres5.mongodb.net/mern");

    await Doctor.deleteMany();

    await Doctor.insertMany(doctors);

    console.log("20 doctors seeded successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding doctors:", error);
    process.exit(1);
  }
};

seedDoctors();