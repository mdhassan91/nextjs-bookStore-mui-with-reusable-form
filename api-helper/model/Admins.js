import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  });
   
  const Admins = mongoose.models.Admins || mongoose.model("Admins", userSchema);
  export default  Admins;
  