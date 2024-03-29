import React, { useState, createContext, useEffect } from "react";
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
import SinglePostArea from "./components/SinglePostArea/SinglePostArea";
import PostProjectArea from "./components/PostProject/PostProjectArea";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ViewBidInsights from "./components/ViewBidInsights/ViewBidInsights";
export const collectionContext = createContext()
function App() {

  // https://online-jobplace-server-production.up.railway.app/
  const [userAuth, setUserAuth] = useState([]);
  const [loginInfo, setLoginInfo] = useState({});
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');
  const [profileData, setProfileData] = useState([]);
  const [getPostData, setGetPostData] = useState([]);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [employer, setEmployer] = useState(false);
  const [jobSeaker, setJobSeaker] = useState(false);
  document.title = "Hire Freelancers & Find Freelancers";

  useEffect(() => {
    setEmployer(true)
  }, [])

  return (
    <collectionContext.Provider value={{
      value1: [loginInfo, setLoginInfo],
      value2: [userName, setUserName],
      value3: [title, setTitle],
      value4: [description, setDescription],
      value5: [rate, setRate],
      value6: [userAuth, setUserAuth],
      value7: [profileData, setProfileData],
      value8: [getPostData, setGetPostData],
      value9: [updateStatus, setUpdateStatus],
      value10: [signIn, setSignIn],
      value11: [employer, setEmployer],
      value12: [jobSeaker, setJobSeaker],
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
          <PrivateRoute userAuth={userAuth} path="/pendingArea/:postId/:uniqueId">
            <PendingArea />
          </PrivateRoute>
          <PrivateRoute userAuth={userAuth} path="/adminPanel">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/postedJob">
            <JobPostedArea />
          </PrivateRoute>
          <PrivateRoute path="/singlePost/:id/:userId">
            <SinglePostArea />
          </PrivateRoute>
          <PrivateRoute path="/view-profile">
            <ViewProfile />
          </PrivateRoute>

          <PrivateRoute path="/proposal-user-profile/:profileId">
            <ViewProfile />
          </PrivateRoute>
          <PrivateRoute path="/membership">
            <MembershipPage />
          </PrivateRoute>
          <PrivateRoute path="/account-analytics">
            <AccountAnalyticsPage />
          </PrivateRoute>
          <PrivateRoute path="/settings">
            <SettingsPage />
          </PrivateRoute>
          <PrivateRoute path="/bid-insight">
            <ViewBidInsights />
          </PrivateRoute>

        </Switch>
      </Router>
    </collectionContext.Provider>
  );
}

export default App;
