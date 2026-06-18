import mongoose from "mongoose";

const patientIdSchema = new mongoose.Schema({
  type: mongoose.Schema.Types.ObjectId,
  ref: "Patients",
});

const medicalRecordsSchema = new mongoose.Schema(
  {
    patientId: {
      type: [patientIdSchema],
      required: true,
    },
    examinedAt: {
      type: Date,
      required: true,
    },
    problem: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const MedicalRecords = mongoose.model(
  "MedicalRecords",
  medicalRecordsSchema,
);