import MenuModule from './menu/menu';
import rootStyle from './root.module.css';
import { Switch, Route } from 'react-router-dom';
import HomeModule from './home/home';
import LoginModule from './login/login';
import SignupModule from './signup/signup';
import DashboardModule from './dashboard/dashboard';

const rootScreen = (props) => {
    return (
            <div className={rootStyle.rootContainer}>
                <div className={rootStyle.menuContainer}>
                    <MenuModule />
                </div>
                <div className={rootStyle.contentContainer}>
                    <Switch>
                        <Route exact path="/">
                            <HomeModule />
                        </Route>
                        <Route exact path="/login">
                                <LoginModule />
                        </Route>
                        <Route exact path="/signup">
                            <SignupModule />
                        </Route>
                        <Route exact path="/dashboard">
                            <DashboardModule />
                        </Route>
                    </Switch>
                </div>
            </div>
    )
}

export default rootScreen;