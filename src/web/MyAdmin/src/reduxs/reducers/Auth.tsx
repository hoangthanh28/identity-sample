import { USER_LOADED, USER_LOADING } from '../../constants/ActionTypes';

const INIT_STATE = {
    isLoadingUser: true
};

export default (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case USER_LOADING: {
            return {
                ...state,
            };
        }
        case USER_LOADED: {
            return {
                ...state,
                isLoadingUser: false
            };
        }

        default:
            return state;
    }
};
