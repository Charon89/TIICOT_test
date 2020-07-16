import {GET_CLIENTS, ADD_CLIENT, GET_CLIENT, CLEAR_CLIENT, CLEAR_CLIENTS, GET_CLIENTS_BY_NAME} from '../actions/types';

const initialState = {
    client: null,
    clients: [],
    loading: true
}

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case CLEAR_CLIENT:
            return {
                ...state,
                client: null
            };
        case CLEAR_CLIENTS:
            return {
                ...state,
                clients: []
            };
        case GET_CLIENTS:
            return {
                ...state,
                clients: payload,
                loading: false
            };
            case GET_CLIENTS_BY_NAME:
            return {
                ...state,
                clients: payload,
                loading: false
            };
        case GET_CLIENT:
            return {
                ...state,
                client: payload,
                loading: false
            };
        case ADD_CLIENT:
            return {
                ...state,
                clients: [payload, ...state.clients],
                loading: false
            }
        default:
            return state

    }
}
