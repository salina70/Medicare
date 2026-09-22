// import department from "../models/departmentmodel.js"; 
// import Doctor from "../models/doctorModel.js";

// // Get all doctors belonging to a department
// export const getDoctorsByDepartment = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Find department
//     const department = await Department.findById(id);

//     if (!department) {
//       return res.status(404).json({
//         message: "Department not found",
//       });
//     }

//     // Find doctors in this department
//     const doctors = await Doctor.find({
//       department: department.name,
//     });

//     res.status(200).json({
//       department: department.name,
//       doctors,
//     });
//   } catch (error) {
//     console.error(
//       "GET DOCTORS BY DEPARTMENT ERROR:",
//       error
//     );

//     res.status(500).json({
//       message: "Failed to fetch doctors",
//       error: error.message,
//     });
//   }
// };


import department from "../models/departmentmodel.js";
import Doctor from "../models/doctorModel.js";


export const getAllDepartments = async(req, res)=>{
  try{
const result  = await department.find({});
console.log(result)
res.send({
  status:true,
  message:result
})
  }catch(error){
    console.log(error);
    
  }
}

export const getEachDepartment = async (req, res) =>{
const name = req.params.id;
const data = await department.findOne({
  name: { $regex: `^${name}$`, $options: "i" }
});

const id = data._id;

const doctors = await Doctor.find({department:id});

if(!data){
  return res.send({
status:"failure",
message:"data failed",
  })
}

return res.send({
  status:"success",
  message:doctors
});
}