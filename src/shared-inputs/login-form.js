import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { withRouter } from "react-router";
import loginApi from '../services/login.api';
import { AuthState } from "../states/AuthState";

const LoginForm = (props) => {

    const userName = useRef(null);
    const password = useRef(null);

    const state = useContext(AuthState);

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [errMsg, setErrMsg] = useState({
        isInvalid: false,
        msg: null
    });

    function loginHandler(event) {
        event.preventDefault();
        setIsFormSubmitted(true);
    }

    useEffect(() => {
        if (isFormSubmitted) {
            setErrMsg({
                isInvalid: false,
                msg: null
            })
            const getLogin = async (requestData) => {
                try {
                    const getLoginDetails = await loginApi(requestData);
                    setIsFormSubmitted(false);
                    if (getLoginDetails && getLoginDetails.status === 200 && getLoginDetails.data) {
                        console.log(getLoginDetails);
                        state.setState({
                            isLoggedIn: true,
                            token: getLoginDetails.data.token,
                            username: userName.current.value,
                        })
                        props.history.push('/dashboard');
                    }
                }
                catch (err) {
                    setIsFormSubmitted(false);
                    setErrMsg({
                        isInvalid: true,
                        msg: 'Invalid credentials..'
                    })
                }
            }
            getLogin({
                "email": userName.current.value,
                "password": password.current.value
            });
        }
    }, [isFormSubmitted, props.history, state]);

    return (
        <Fragment>
            <div className="loginFormContainer">
                <div>
                    <form onSubmit={loginHandler}>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Login to React Solutions!
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {errMsg.isInvalid && <tr>
                                    <td style={{ color: 'red', fontWeight: 'bold' }}>{errMsg.msg}</td>
                                </tr>}
                                <tr>
                                    <td><label htmlFor="Usrename">Username: </label></td>
                                    <td><input type="text" ref={userName} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="Usrename">Password: </label></td>
                                    <td> <input type="password" ref={password} /></td>
                                </tr>
                                <tr>
                                    <td><button type="submit">Login</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(LoginForm);