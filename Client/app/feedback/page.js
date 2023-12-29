"use client"
import Link from 'next/link'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import '../app.css'

const Feedback = () => {
  return (
    <div className='feedback-form'>
      <Link href={"/"}>Go back</Link>
      <div className="form-wrapper">
        <div className='Plus-icon'>
        <p>+</p>
        </div>
        <h3>Create New Feedback</h3>
        <form>
          <label htmlFor="feedbackTitle">
            <strong>Feedback Title</strong>
            <p>Add a short, description headline</p>
          </label>
          <input type="text"/>
          <br />
          <label htmlFor="category">
            <strong>Category</strong>
            <p>Choose a category for your feedback</p>
          </label>
          <select className="category">
            <option value="feature">Feature</option>
            <option value="ui">UI</option>
            <option value="ux">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
          </select>
          <br />
          <br />
          <label htmlFor="feedbackDetail">
            <strong>Feedback Detail</strong>
            <p>
              Include any specific comments on what should be improved, added, etc.
            </p>
          </label>
          <textarea id="feedbackDetail" cols="30" rows="10"></textarea>
          <div className="btn">
            <button className='btn1'>Cancel</button>
            <button className='btn2'>Add Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
