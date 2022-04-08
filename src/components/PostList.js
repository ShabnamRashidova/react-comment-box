import {api} from "../api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PostList = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    api()
      .get("/posts")
      .then((response) => setPostList(response.data));
  }, []);
  return (
    <div className="ui relaxed divided list">
      {postList.map((list) => (
        <div className="item" key={list.id}>
          <div className="content">
            <Link to={`/posts/${list.id}`} className="header">
              {list.title}
            </Link>
            <div className="description">{list.created_at}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
