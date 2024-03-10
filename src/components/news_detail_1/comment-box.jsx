import React from 'react';

const CommentBox = ({ comments }) => {
  return (
    <ul>
      {comments.map((item, i) => (
        <li key={i} className={item.children}>
          <div className="postbox__comment-box  d-flex">
            <div className="postbox__comment-info">
              <div className="postbox__comment-avater mr-20">
                <img src={item.img} alt={item.user} />
              </div>
            </div>
            <div className="postbox__comment-text">
              <div className="postbox__comment-name">
                <h5>{item.user}</h5>
                <span className="post-meta">{item.date}</span>
              </div>
              <p>{item.comment}</p>
              <div className="postbox__comment-reply">
                <a href="#">Reply</a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentBox;
