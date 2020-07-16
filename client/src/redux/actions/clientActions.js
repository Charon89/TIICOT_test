import axios from 'axios';
import {GET_CLIENTS, CLEAR_CLIENTS} from './types';

export const getAllClients = () => async dispatch => {
    // dispatch({type: CLEAR_CLIENTS});
    try{
        const res = await axios.get('http://localhost:5000/clients');
        console.log("Getting all clients")
        dispatch({
            type: GET_CLIENTS,
            payload: res.data
        })
    }catch (e) {
        console.log(e);
    }
}
