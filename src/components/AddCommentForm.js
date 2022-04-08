import React from "react";

const AddCommentForm = ({ handleCommentSubmit, handleOnChange, comment }) => {
  return (
    <>
      <h3>Add Your Comment</h3>
      <form className="ui form" onSubmit={handleCommentSubmit}>
        <div className="ui mini icon input">
          <input
            name="display_name"
            type="text"
            placeholder="Your Name"
            onChange={handleOnChange}
            value={comment.display_name}
          />
        </div>
        <textarea
          placeholder="Your comment"
          rows="3"
          col="2"
          onChange={handleOnChange}
          value={comment.body}
          name="body"
        ></textarea>
        <button className="ui blue button" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default AddCommentForm;
