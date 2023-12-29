"use client";
import "../app.css";
const editFeedback = () => {
  return (
    
      <div className="editfeedback">
        <h3>Editing Add a dark theme option</h3>
        <form className="editfeedback-form">
          <label htmlFor="">
            <strong>Feedback Title</strong>
          </label>
          <p>Add a short,descriptive headline</p>
          <label>
            <strong>Category</strong>
          </label>
          <p>Choose a category for your feedback</p>
          <select>
            <option value="">Feature</option>
            <option value="">UI</option>
            <option value="">UX</option>
            <option value="">Enhancement</option>
            <option value="">Bug</option>
          </select>
          <br />
          <br />
          <label htmlFor="">
            <strong>Update Status</strong>
          </label>
          <p>Change feedback state</p>
          <select>
            <option value="">planned</option>
            <option value="">Suggestion</option>
            <option value="">In-Progress</option>
            <option value="">Live</option>
          </select>
          <br />
          <br />
          <label>
            <strong>Feedback Detail</strong>
          </label>
          <p>
            Include any specific comments on what should be improved,added,etc
          </p>
          <div>
            It would help people with light sensitivities and who prefer dark
            mode.
          </div>
          <br/>
          <br/>
          <br/>
          <div className="editfeedback-button">
            <div>
              <button>Delete</button>
            </div>
            <div>
              <button>Cancel</button>
              <button>Add Feedback</button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default editFeedback;
