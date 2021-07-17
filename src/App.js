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
// import PendingArea from "./components/PendingArea/PendingArea";
// import Admin from './components/Admin/Admin';
// import JobPostedArea from "./components/JobPostedArea/JobPostedArea";
// import ListItemDetails from "./components/ListItemDetails/ListItemDetails";
// import SinglePostArea from "./components/SinglePostArea/SinglePostArea";
// import PostProjectArea from "./components/PostProject/PostProjectArea";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import { useEffect } from "react";
// import HeaderLower from './components/Header/HeaderLower/HeaderLower';
export const collectionContext = createContext()
function App() {
  //   const [userAuth, setUserAuth] = useState([]);
  //   useEffect(() => {
  //     fetch("https://morning-tundra-89617.herokuapp.com/userLoginData")
  //         .then(res => res.json())
  //         .then(data => {setUserAuth(data)})
  // }, [])
  const [loginInfo, setLoginInfo] = useState({});
  return (
    <collectionContext.Provider value={{ value1: [loginInfo, setLoginInfo] }}>
      <Router>
        <Navbar />
        {/* <HeaderLower /> */}
        {/* { window.location.pathname === '/postproject' &&} */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* <PrivateRoute userAuth={userAuth} path="/postproject">
            <PostProjectArea />
          </PrivateRoute>
          <PrivateRoute userAuth={userAuth} path="/pendingArea">
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
          </PrivateRoute> */}
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
