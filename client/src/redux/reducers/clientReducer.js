import {GET_CLIENTS, ADD_CLIENT, GET_CLIENT, CLEAR_CLIENT, CLEAR_CLIENTS} from '../actions/types';

const initialState = {
    client: null,
    clients: []
}

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case CLEAR_CLIENT:
            return {
                client: null
            };
        case CLEAR_CLIENTS:
            return {
                clients: []
            };
        case GET_CLIENTS:
            return {
                ...state,
                clients: payload
            };
        case GET_CLIENT:
            return {
                ...state,
                client: payload
            };
        case ADD_CLIENT:
            return {
                ...state
            }
        default:
            return state

    }
}
