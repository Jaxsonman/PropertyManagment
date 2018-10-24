import {
    AUTHENTICATED_USER
} from '../actions/types';

const INITIAL_STATE = {
    authenticated: false,
    user: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTHENTICATED_USER:
            const { user } = action.payload
            return {
                ...state,
                user
            }
        default: return state;
    }
}