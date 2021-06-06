import menuStyle from './menu.module.css';
import { Link } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
import { AuthState } from '../../states/AuthState';
const Menu = (props) => {

    const userState = useContext(AuthState);

    const [isUserLogout, setUserLogout] = useState(false);

    const userLogout = () => {
        setUserLogout(true);
    }

    useEffect(() => {
        if(isUserLogout) {
            userState.setState({
                isLoggedIn: false,
                token: null,
                username: 'Guest',
            })
            setUserLogout(false);
        }
    }, [isUserLogout, userState])

    return (
        <div className={menuStyle.menuContainer}>
            <div className={menuStyle.titleContainer}>
                React Solutions
            </div>
            <div className={menuStyle.login}>
                <div className={menuStyle.authItems}>
                    <li>
                        <Link to="/" className={menuStyle.item}>Home</Link>
                    </li>
                    {!userState.state.isLoggedIn &&
                        <Fragment>
                            <li>
                                <Link to="/login" className={menuStyle.item}>Login</Link>
                            </li>
                            <li>
                                <Link to="/signup" className={menuStyle.item}>Signup</Link>
                            </li>
                        </Fragment>}
                    {
                        userState.state.isLoggedIn &&
                        <Fragment>
                            <li onClick={userLogout}>
                                <Link to="/login" className={menuStyle.item}>Logout</Link>
                            </li>
                        </Fragment>
                    }
                </div>
            </div>
        </div>
    );
}

export default Menu;