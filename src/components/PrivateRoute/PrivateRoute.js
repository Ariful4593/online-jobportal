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

    const loginUser = userAuth.find(user => user.name === loginInfo.name && user.email === loginInfo.email && user.password === loginInfo.password)
    return (

        <Route
            {...rest}
            render={({ location }) =>
                (loginUser) ? (
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