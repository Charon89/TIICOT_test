import React from 'react';
import PropTypes from 'prop-types';

const ClientItem = ({client: {firstName, lastName}}) => {
    return (
        <div className="item-wrapper">
            <p>{firstName}{' '}{lastName}</p>
        </div>
    );
};

ClientItem.propTypes = {};

export default ClientItem;
