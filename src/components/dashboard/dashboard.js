import { Fragment, useContext, useEffect, useState } from "react";
import { withRouter } from "react-router";
import { AuthState } from "../../states/AuthState";
import DashboardStyle from './dashboard.module.css';
const DashboardModule = (props) => {

    const userState = useContext(AuthState);

    const [isUserLoggedOut, setUserLoggedOutState] = useState(false);

    const userLogout = () => {
        setUserLoggedOutState(true)
    }

    useEffect(() => {
        if (isUserLoggedOut) {
            userState.setState({
                isLoggedIn: false,
                token: null,
                username: 'Guest',
            });
            props.history.push('/');
            setUserLoggedOutState(false);
        }
    }, [isUserLoggedOut, props.history, userState]);

    return (
        <Fragment>
            <div className={DashboardStyle.dashboardContainer}>
                <div>
                    Welcome {userState.state.username}
                </div>
                <div style={{ marginTop: '30px' }} onClick={userLogout}>
                    <span style={{ border: '2px solid green', padding: '5px', borderRadius: '10px', cursor: 'pointer' }}>
                        Logout
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(DashboardModule);