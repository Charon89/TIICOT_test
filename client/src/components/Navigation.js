import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const Navigation = props => {
    return (
        <div className="nav-wrapper">
            <div>
                <Link to='/'> <button>Home </button></Link>
                <Link to='/search'> <button>Search </button> </Link>
            </div>
        </div>
    );
};

Navigation.propTypes = {};

export default Navigation;
