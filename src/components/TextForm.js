import React, { useEffect, useState } from "react";
import { api } from "../api";
import { withRouter } from "react-router-dom";
const TextForm = (props) => {
  const [text, setText] = useState({ title: "", content: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (props.text.title && props.text.content) setText(props.text);
  }, [props.text]);
  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (props.text.title) {
      api()
        .put(`/posts/${props.match.params.id}`, text)
        .then((response) => {
          console.log(response);
          props.history.push(`/posts/${props.match.params.id}`);
        })
        .catch((error) => setError("All fields are required"));
    } else {
      api()
        .post("/posts", text)
        .then((response) => {
          props.history.push("/");
        })
        .catch((error) => setError("All fields are required"));
    }
  };

  return (
    <>
      {error && (
        <div className="ui error message">
          <div className="header">Error</div>
          <p>{error}</p>
        </div>
      )}

      <div className="ui form">
        <div className="field">
          <label>Text heading</label>
          <input
            type="text"
            onChange={handleChange}
            value={text.title}
            name="title"
          />
        </div>
        <div className="field">
          <label>Text content</label>
          <textarea
            rows="3"
            onChange={handleChange}
            value={text.content}
            name="content"
          ></textarea>
        </div>
        <button className="ui primary button" onClick={onSubmit}>
          Send
        </button>
        <button className="ui primary button">Cancel</button>
      </div>
    </>
  );
};

export default withRouter(TextForm);
