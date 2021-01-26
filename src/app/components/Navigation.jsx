import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';
import { ConnectedUsernameDisplay } from './UsernameDisplay';
import * as mutations from '../store/mutations';

const Navigation = ({id, authenticated}) => (
    <>
    {!authenticated 
    ?   <nav className="text-center sticky-top mb-4 p-3">
            <Link to="/dashboard" style={{textDecoration: 'none'}}>
                <h1>TasQ</h1>
            </Link>
        </nav>
    :   <nav className="navbar navbar-light sticky-top mb-4 p-3" style={{backgroundColor: '#e3f2fd'}}>
            <div className="navbar-header">
                <Link to="/dashboard" style={{textDecoration: 'none'}}>
                    <h1>TasQ</h1>
                </Link>
            </div>
            <ul className="nav navbar-nav mx-auto" style={{display: 'inline-block', textAlign: 'center'}}>
                <li className="nav-item mx-4" style={{display: 'inline-block'}}>
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item mx-4" style={{display: 'inline-block'}}>
                    <Link to="#" className="nav-link">About</Link>
                </li>
                <li className="nav-item mx-4" style={{display: 'inline-block'}}>
                    <Link to="mailto:kwonoj@uci.edu" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item mx-4" style={{display: 'inline-block'}}>
                    <Link to="/" className="nav-link">Logout</Link>
                </li>
            </ul>          
        </nav>
    }
    </>

);

const mapStateToProps = ({session}) => {
    return {
        id: session.id,
        authenticated: session.authenticated == mutations.AUTHENTICATED
    }
}

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);