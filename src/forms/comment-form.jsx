import React, { useState } from "react";

const CommentForm = ({ addComment }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new comment to the array
    addComment(formData);
    // Clear form data
    setFormData({
      name: '',
      email: '',
      website: '',
      comment: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="postbox__comment-input">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="postbox__comment-input">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-input">
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-input">
            <textarea
              placeholder="Enter your comment ..."
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-agree d-flex align-items-start mb-20">
            <input
              className="e-check-input"
              type="checkbox"
              id="e-agree"
            />
            <label className="e-check-label" htmlFor="e-agree">
             {/* Deskripsi */}
            </label>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-btn">
            <button type="submit" className="tp-btn">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
