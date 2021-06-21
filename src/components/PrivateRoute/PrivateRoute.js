import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";
import { collectionContext } from '../../App';
const PrivateRoute = ({ children, ...rest }) => {
    const [loginUser,setLoginUser] = useState({})
    const {value1} = useContext(collectionContext)
    const [loginInfo, setLoginInfo] = value1;
    console.log(loginInfo)
    useEffect(() => {
        fetch('http://localhost:4000/userLoginData')
        .then(res => res.json())
        .then(data => {
            // const loginData = data.find()
            console.log(data)
        })
    }, [])
    return (
        <Route
            {...rest}
            render={({ location }) =>
            (loggedInUser.email) ? (
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