import mongoose from "mongoose";

const feedBack = new mongoose.Schema({
    feedbackTitle: {
        type: String,
        required: [true, "Please provide a feedbackTitle"],
    },
    category: {
        type: String,
        required: [true, "Please provide a category"],
    },
    password: {
        type: String,
    },
    feedbackDetail: {
        type: String,
        required: [true, "Please provide a feedbackDetail"],
    },
})

const feedback = mongoose.models.feedback || mongoose.model("feedback", feedBack);

export default feedback;