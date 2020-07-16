import React, {useState} from 'react';
import {search_clients, getAllClients} from "../redux/actions/clientActions";
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

const Search = ({search_clients, getAllClients}) => {

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
        </div>
    );
};

Search.propTypes = {

};

export default connect(null, {search_clients, getAllClients})(Search);

