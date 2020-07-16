import axios from 'axios';
import {GET_CLIENTS, ADD_CLIENT, CLEAR_CLIENTS, GET_CLIENTS_BY_NAME} from './types';

export const getAllClients = () => async dispatch => {
    // dispatch({type: CLEAR_CLIENTS});
    try {
        const res = await axios.get('/clients');
        dispatch({
            type: GET_CLIENTS,
            payload: res.data
        })
    } catch (e) {
        console.log(e);
    }
}

export const search_clients = firstName => async dispatch => {
     dispatch({type: CLEAR_CLIENTS});
    try {
        const res = await axios.get(`/clients/${firstName}`);
        dispatch({
            type: GET_CLIENTS_BY_NAME,
            payload: res.data
        })
    } catch (e) {
        console.log(e);
    }
}

export const addClient = (formData) => async dispatch => {
    dispatch({type: CLEAR_CLIENTS});
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        const res = await axios.post('/clients', formData, config);
        console.log(res.data)
        dispatch({
            type: ADD_CLIENT,
            payload: res.data
        })
    } catch (e) {
        console.log(e);
    }
}
