import React, { useState, createContext } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login'

import Navbar from "./components/Navbar/Navbar"
import ViewProfile from "./components/ViewProfile/ViewProfile";
import MembershipPage from "./components/MembershipPage/MembershipPage";
import AccountAnalyticsPage from "./components/AccountAnalyticsPage/AccountAnalyticsPage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import PendingArea from "./components/PendingArea/PendingArea";
import Admin from './components/Admin/Admin';
import JobPostedArea from "./components/JobPostedArea/JobPostedArea";
import ListItemDetails from "./components/ListItemDetails/ListItemDetails";
import SinglePostArea from "./components/SinglePostArea/SinglePostArea";
import PostProjectArea from "./components/PostProject/PostProjectArea";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
export const collectionContext = createContext()
function App() {

  // https://morning-tundra-89617.herokuapp.com/
  const [userAuth, setUserAuth] = useState([]);
  const [loginInfo, setLoginInfo] = useState({});
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');


  useEffect(() => {
    fetch("http://localhost:4000/userLoginData")
      .then(res => res.json())
      .then(data => { setUserAuth(data) })
  }, []);
  

  return (
    <collectionContext.Provider value={{
      value1: [loginInfo, setLoginInfo],
      value2: [userName, setUserName],
      value3: [title, setTitle],
      value4: [description, setDescription],
      value5: [rate, setRate],
      value6: [userAuth, setUserAuth],
    }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute userAuth={userAuth} path="/postproject">
            <PostProjectArea />
          </PrivateRoute>
          <PrivateRoute userAuth={userAuth} path="/pendingArea/:postId">
            <PendingArea />
          </PrivateRoute>
          <PrivateRoute userAuth={userAuth} path="/adminPanel">
            <Admin />
          </PrivateRoute>
          <PrivateRoute userAuth={userAuth} path="/postedJob">
            <JobPostedArea />
          </PrivateRoute>
          <PrivateRoute userAuth={userAuth} path="/singlePost/:id">
            <SinglePostArea />
          </PrivateRoute>
          <PrivateRoute userAuth={userAuth} path="/details-item/:category">
            <ListItemDetails />
          </PrivateRoute>
          <Route path="/view-profile">
            <ViewProfile />
          </Route>
          <Route path="/membership">
            <MembershipPage />
          </Route>
          <Route path="/account-analytics">
            <AccountAnalyticsPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
        </Switch>
      </Router>
    </collectionContext.Provider>
  );
}

export default App;
