import React from "react";
import AddCommentForm from "./AddCommentForm";
import CommentList from "./CommentList";

const PostComments = ({
  comment,
  comments,
  handleCommentSubmit,
  handleOnChange,
}) => {
  return (
    <>
      <CommentList comments={comments} />
      <AddCommentForm
        handleCommentSubmit={handleCommentSubmit}
        handleOnChange={handleOnChange}
        comment={comment}
      />
    </>
  );
};

export default PostComments;
