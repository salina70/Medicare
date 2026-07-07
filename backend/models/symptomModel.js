import mongoose from "mongoose";

const symptomSchema = mongoose.Schema({
  icon: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const symptomModel = new mongoose.model("symptom", symptomSchema);
