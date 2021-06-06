
import {createContext, useState} from 'react';

export const UserState = {
    isLoggedIn : false,
    token: null,
    username: 'Guest',
    setState: ()=> {}
}

export const AuthState = createContext(UserState);


function AuthStateProvider(props) {

    const [state, setState] = useState(UserState);

    const setUserState = (state)  => {
        setState(state)
    }

    return (
        
        <AuthState.Provider value={{state: state, setState: setUserState}}>
            {props.children}
        </AuthState.Provider>
    )
}

export default AuthStateProvider;