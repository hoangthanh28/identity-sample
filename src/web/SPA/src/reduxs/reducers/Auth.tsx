import { SET_PROFILE_AUTH } from '../../constants/ActionTypes';

const INIT_STATE = {
    user: {}
};

export default (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case SET_PROFILE_AUTH: {
            return {
                ...state,
                user: action.user
            };
        }

        default:
            return state;
    }
};
