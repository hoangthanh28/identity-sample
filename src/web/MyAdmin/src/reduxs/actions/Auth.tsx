import userManager from '../../auth/Oidc';
import { USER_SIGNED_OUT } from 'redux-oidc';
import { USER_LOADING, USER_LOADED } from '../../constants/ActionTypes';

export const userSignOut = () => dispatch => {
    dispatch({ type: USER_SIGNED_OUT });
    userManager.getUser().then(user => {
        userManager
            .signoutRedirect({ prompt: 'login', 'id_token_hint': user?.id_token })
            .catch(err => console.log(err));
    });
};

export function userLoading() {
    return {
        type: USER_LOADING
    };
}
export function userLoaded() {
    return {
        type: USER_LOADED
    };
}
