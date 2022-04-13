import React from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {


    const userLoginInfo = JSON.parse(localStorage.getItem('token'));
    return (

        <Route
            {...rest}
            render={({ location }) =>
                (userLoginInfo) ? (
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