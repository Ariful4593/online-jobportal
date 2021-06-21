import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login'
import PendingArea from "./components/PendingArea/PendingArea";
import PostProject from "./components/PostProject/PostProject";
import Admin from './components/Admin/Admin';
import PostedJob from "./components/PostedJob/PostedJob";
import SinglePost from "./components/SinglePost/SinglePost";
import Navbar from "./components/Navbar/Navbar"

export const collectionContext = createContext()
function App() {

  const [loginInfo, setLoginInfo] = useState({});
  return (
    <collectionContext.Provider value={{ value1: [loginInfo, setLoginInfo] }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/postproject">
            <PostProject />
          </Route>
          <Route path="/pendingArea">
            <PendingArea />
          </Route>
          <Route path="/adminPanel">
            <Admin />
          </Route>
          <Route path="/postedJob">
            <PostedJob />
          </Route>
          <Route path="/singlePost/:id">
            <SinglePost />
          </Route>
        </Switch>
      </Router>
    </collectionContext.Provider>
  );
}

export default App;
