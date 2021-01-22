import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';
import { ConnectedUsernameDisplay } from './UsernameDisplay';
import * as mutations from '../store/mutations';

const Navigation = ({id, authenticated}) => (
    <div>
        <Link to="/dashboard" style={{textDecoration: 'none'}}>
            <h1>Task Manager</h1>
        </Link>
        {/* {authenticated ? <ConnectedUsernameDisplay id={id}/> : null} */}
    </div>
);

const mapStateToProps = ({session}) => {
    return {
        id: session.id,
        authenticated: session.authenticated == mutations.AUTHENTICATED
    }
}

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);