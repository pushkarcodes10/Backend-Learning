import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      maxLength: 8,
    },
    contactNumber: {
      type: Number,
      required: true,
      unique: true,
      max: 10,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
