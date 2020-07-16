import React, {useState} from 'react';
import {search_clients, getAllClients} from "../redux/actions/clientActions";
import {connect} from 'react-redux'
import ClientList from "./ClientList";
import PropTypes from 'prop-types';
import ClientItem from "./ClientItem";

const Search = ({search_clients, clients}) => {

    const [formData, setFormData] = useState({
        firstName: ''
    })

    const {firstName, lastName} = formData;

    const onSubmit = async e => {
        e.preventDefault();
        search_clients(firstName);
    }
    const onChange = async e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div className='add-wrapper'>
            <h1>Search</h1>
            <form action="" onSubmit={e => onSubmit(e)}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name='firstName' value={firstName} onChange={e => onChange(e)}/>
                <button className='btn' type='submit'> Search </button>
            </form>
            {clients.map(client=><ClientItem key={client._id} client={client}/>)}
        </div>
    );
};

ClientList.propTypes = {
    search_clients: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    clients: state.clientReducer.clients
})

export default connect(mapStateToProps, {search_clients})(Search);

