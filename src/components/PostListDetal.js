import React, { useEffect, useState } from "react";
import { api } from "../api";
import axios from "axios";
import PostComments from "./PostComments";
import { Link } from "react-router-dom";

const INITAL_COMMENT = {
  display_name: "",
  body: "",
};
const PostListDetal = (props) => {
  const { id } = props.match.params;
  const [postListDetal, setPostListDetal] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(INITAL_COMMENT);

  const handleOnChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    api()
      .post(`/posts/${id}/comments`, comment)
      .then((response) => {
        setComments([...comments, response.data]);
        setComment(INITAL_COMMENT);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    axios
      .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
      .then((response) => {
        setPostListDetal(response[0].data);
        setComments(response[1].data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <h2 className="ui header">{postListDetal.title}</h2>
      <p>{postListDetal.content}</p>
      <p>{postListDetal.created_at}</p>
      <div className="ui buttons">
        <Link className="ui blue button" to={`/posts/${postListDetal.id}/edit`}>
          Edit
        </Link>
      
      </div>
      <PostComments
        comments={comments}
        comment={comment}
        handleCommentSubmit={handleCommentSubmit}
        handleOnChange={handleOnChange}
      />
    </>
  );
};

export default PostListDetal;
