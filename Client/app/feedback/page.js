"use client";
import { useState } from "react";
import Link from "next/link";
import "../app.css";
import { useRouter} from "next/navigation";

const Feedback = () => {
  const router = useRouter();
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("");
  const [feedbackdetail, setFeedbackdetail] = useState("");

  const data = {
    feedback,
    category,
    feedbackdetail,
  };

  const addFeedback = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      if (response.ok) {
        alert("New feedback added");
        setTimeout(() => {
          router.push("/");
        }, 0);
        console.log(data,"hvhuvhjvhj")
      } else {
        alert("Some error with data. Please check and try again");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
    router.push("/")
  };
  
  return (
    <div className="feedback-form">
      <Link href={"/"}>Go back</Link>
      <div className="form-wrapper">
        <div className="Plus-icon">
          <p>+</p>
        </div>
        <h3>Create New Feedback</h3>
        <form onSubmit={addFeedback}>
          <label htmlFor="feedbackTitle">
            <strong>Feedback Title</strong>
            <p>Add a short, description headline</p>
          </label>
          <input
            className="feedbackTitle-input"
            type="text"
            value={feedback}
            placeholder="Enter Name"
            onChange={(e) => setFeedback(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="category">
            <strong>Category</strong>
            <p>Choose a category for your feedback</p>
          </label>
          <select
            className="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="feature">Feature</option>
            <option value="ui">UI</option>
            <option value="ux">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
          </select>
          <br />
          <br />
          <label className="feedbackDetail">
            <strong>Feedback Detail</strong>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </label>
          <textarea
            className="feedbackDetail-input"
            id="feedbackDetail"
            cols="30"
            rows="10"
            value={feedbackdetail}
            placeholder="Feedback Details"
            onChange={(e) => setFeedbackdetail(e.target.value)}
          ></textarea>
          <div className="btn">
            <button className="btn1">Cancel</button>
            <button className="btn2" >
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
