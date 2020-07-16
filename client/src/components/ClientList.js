import React, {useEffect} from 'react';
import ClientItem from './ClientItem';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {getAllClients} from "../redux/actions/clientActions";


const ClientList = ({getAllClients, clientReducer}) => {

    useEffect(()=>{
        getAllClients();
    },[]);

    return (
        <div className='list-wrapper'>
            <h2> Client List component</h2>
            <ClientItem/>
        </div>
    );
};

ClientList.propTypes = {
    getAllClients: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    client: state.clientReducer
})

export default connect(mapStateToProps, {getAllClients})(ClientList);
