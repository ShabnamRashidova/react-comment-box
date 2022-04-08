import React from "react";
import PostList from "./components/PostList";
import PostListDetal from "./components/PostListDetal";
import AddText from "./components/AddText";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditText from "./components/EditText";

const App = () => {
  return (
    <Router>
      <div className="main-wrapper">
        <header></header>

        <div className="ui raised very padded text container segment">
          <Route path="/" exact component={PostList} />
          <Route path="/posts/:id" exact component={PostListDetal} />
          <Route path='/addtext' component={AddText}/>
          <Route path='/posts/:id/edit' component={EditText}/>
      
        </div>
      </div>
    </Router>
  );
};

export default App;
