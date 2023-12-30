const feedbackModel = require("../Model/feedbackModel.js");


//=================================================== createUsers ================================================

const createFeedback = async function (req, res) {
  try {
    let data = req.body;
    data.feedback = data.feedback.toLowerCase().trim();
    data.category = data.category.toLowerCase().trim();
    data.feedbackdetail = data.feedbackdetail.toLowerCase().trim();

    let { feedback, category, feedbackdetail } = data;
    
    if (Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "Please fill out all the details." });

    if (!feedback) return res.status(400).send({ status: false, msg: "Please provide a feedback" });
    if (!category) return res.status(400).send({ status: false, msg: "Please provide a category" });
    if (!feedbackdetail) return res.status(400).send({ status: false, msg: "Please provide an feedbackdetail" });
    

    

    const saveData = await feedbackModel.create(data);
    console.log(saveData)
    return res.status(201).send({ status: true, mag: "feedbackModel successfully created", data: saveData });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.msg });
  }
};

module.exports = { createFeedback };