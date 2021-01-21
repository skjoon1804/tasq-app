import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';

const Navigation = () => (
    <div>
        <Link to="/dashboard" style={{textDecoration: 'none'}}>
            <h1>Task Manager</h1>
        </Link>
    </div>
);

const mapStateToProps = (state) => ({
    state
})

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);