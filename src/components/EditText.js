import React, { useEffect, useState } from "react";
import { api } from "../api";
import TextForm from "./TextForm";

const EditText = (props) => {
  const [text, setText] = useState({});
  const { id } = props.match.params;
  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then((response) =>
        setText({ title: response.data.title, content: response.data.content })
      );
  }, [id]);
  return (
    <>
      <h1>Edit Text Form</h1>
      <TextForm text={text} />
    </>
  );
};

export default EditText;
