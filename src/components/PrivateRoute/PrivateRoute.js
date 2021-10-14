import React from 'react';
import { useContext } from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";
import { collectionContext } from '../../App';
const PrivateRoute = ({ userAuth, children, ...rest }) => {
    const { value1 } = useContext(collectionContext)
    const [loginInfo] = value1;

    console.log(loginInfo)
    const loginUser = userAuth.find(user => user.name === loginInfo.name && user.email === loginInfo.email && user.password === loginInfo.password)


    const userLoginInfo = JSON.parse(localStorage.getItem('userLoginInfo'));
    return (

        <Route
            {...rest}
            render={({ location }) =>
                (loginUser || userLoginInfo) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    );
};

export default PrivateRoute;