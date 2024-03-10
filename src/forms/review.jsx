import React from 'react';

const Review = () => {
    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <div className="row">
            <div className="col-xxl-12">
                <div className="comment-input">
                    <textarea placeholder="Your review..."></textarea>
                </div>
            </div>
            <div className="col-xxl-6">
                <div className="comment-input">
                    <input type="text" placeholder="Your Name*" required/>
                </div>
            </div>
            <div className="col-xxl-6">
                <div className="comment-input">
                    <input type="email" placeholder="Your Email*"  required/>
                </div>
            </div>
            <div className="col-xxl-12">
                <div className="comment-submit">
                    <button type="submit" className="tp-btn-3">Submit</button>
                </div>
            </div>
            </div>
        </form>
            
        </>
    );
};

export default Review;