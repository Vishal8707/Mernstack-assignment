const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema(
  {
    feedback: {
      type: String,
      // required: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      // required: true,
      lowercase: true,
      trim: true, 
    },
    feedbackdetail: {
      type: String,
      // required: true,
      lowercase: true,
      trim: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("feedback", feedbackSchema);