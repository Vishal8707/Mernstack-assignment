const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema(
  {
    feedback: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      lowercase: true,
      trim: true, 
    },
    feedbackdetail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    }
  },
  { timestamps: true }
);

export default  mongoose.model("feedback", feedbackSchema);