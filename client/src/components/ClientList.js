import React, {Fragment, useEffect} from 'react';
import ClientItem from './ClientItem';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {getAllClients} from "../redux/actions/clientActions";
import AddClient from "./AddClient";


const ClientList = ({getAllClients, clients}) => {

    useEffect(()=>{
        getAllClients();
    },[getAllClients]);

    console.log(clients)

    return (
        <div className='list-wrapper'>
            <h2> Client List component</h2>
            <AddClient/>
            {clients. map((client, index)=> <Fragment key={index}><ClientItem client={client}/></Fragment>)}
        </div>
    );
};

ClientList.propTypes = {
    getAllClients: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    clients: state.clientReducer.clients
})

export default connect(mapStateToProps, {getAllClients})(ClientList);
