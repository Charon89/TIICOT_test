import React, {useState} from 'react';
import {addClient, getAllClients} from "../redux/actions/clientActions";
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

const AddClient = ({addClient, getAllClients}) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    })

    const {firstName, lastName} = formData;

    const onSubmit = async e => {
        e.preventDefault();
        addClient(formData);
        getAllClients();
    }
    const onChange = async e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    console.log(formData)

    return (
        <div className='add-wrapper'>
            <form action="" onSubmit={e => onSubmit(e)}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name='firstName' value={firstName} onChange={e => onChange(e)}/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name='lastName' value={lastName} onChange={e => onChange(e)}/>
                <button className='btn' type='submit'> Add client </button>
            </form>
        </div>
    );
};

AddClient.propTypes = {

};

export default connect(null, {addClient, getAllClients})(AddClient);
