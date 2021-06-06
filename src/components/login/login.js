import React, { useContext, Fragment } from 'react'
import { AuthState } from '../../states/AuthState';
import LoginStyle from './login.module.css';
import Login from '../../shared-inputs/login-form';
const LoginModule = (props) => {

    const ctx = useContext(AuthState);

    return (
        <Fragment>
            <div className={LoginStyle.loginContainer}>
                <div>
                    Hello {ctx.state.username}, Please login to contunue...
                </div>
                <div style={{marginTop: '2%'}}>
                    <Login />
                </div>
            </div>
        </Fragment>
    );
}

export default LoginModule;