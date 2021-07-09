import React, { useState, createContext } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login'
import PendingArea from "./components/PendingArea/PendingArea";
import Admin from './components/Admin/Admin';
import Navbar from "./components/Navbar/Navbar"
import JobPostedArea from "./components/JobPostedArea/JobPostedArea";
import ListItemDetails from "./components/ListItemDetails/ListItemDetails";
import SinglePostArea from "./components/SinglePostArea/SinglePostArea";
import PostProjectArea from "./components/PostProject/PostProjectArea";

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
            <PostProjectArea />
          </Route>
          <Route path="/pendingArea">
            <PendingArea />
          </Route>
          <Route path="/adminPanel">
            <Admin />
          </Route>
          <Route path="/postedJob">
            <JobPostedArea />
          </Route>
          <Route path="/singlePost/:id">
            <SinglePostArea />
          </Route>
          <Route path="/details-item/:category">
            <ListItemDetails/>
          </Route>
        </Switch>
      </Router>
    </collectionContext.Provider>
  );
}

export default App;
