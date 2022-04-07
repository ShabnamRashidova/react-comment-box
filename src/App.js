import React from "react";

import PostList from "./components/PostList";
import PostListDetal from "./components/PostListDetal";
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return (
  <Router>
      <div className="main-wrapper">
        <header></header>

        <div className="ui raised very padded text container segment">
       
        <Route path='/' exact component={PostList}/>
        <Route path='/posts/:id' component={PostListDetal}/>
        </div>
      </div>
      </Router>
  );
};

export default App;
