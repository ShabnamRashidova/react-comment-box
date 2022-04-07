import axios from "axios";
import React, { useEffect, useState } from "react";

const PostListDetal = (props) => {
  const [postListDetal, setPostListDetal] = useState({});
  const { id } = props.match.params;
  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((response) => setPostListDetal(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  return( 
      <>
      <h2 className="ui header">{postListDetal.title}</h2>
      <p>{postListDetal.content}</p>
      <p>{postListDetal.created_at}</p>
      </>
  )
};

export default PostListDetal;
