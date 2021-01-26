import React from 'react';
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as mutations from '../store/mutations';
import '../../styles/index.css';

const LoginComponent = ({authenticateUser, authenticated}) => {
    return (
        <div className="login container card p-5 col-md-4">
            <form onSubmit={authenticateUser}>
                <input type="text" placeholder="username" name="username" defaultValue="" className="form-control"/>
                <input type="password" placeholder="password" name="password" defaultValue="" className="form-control mt-2"/>
                {authenticated === mutations.NOT_AUTHENTICATED ? <p className="text-danger">Login Incorrect</p> : null}
                <button type="submit" disabled={authenticated==mutations.AUTHENTICATING} className="form-control mt-2 btn btn-primary">Login</button>
            </form>
            <p>New User? <Link to='/signup'>Sign up</Link></p> 
        </div>
    );
};

const mapStateToProps = ({session}) => {
    return {
        authenticated: session.authenticated
    }
}
const mapDispatchToProps = (dispatch) => ({
    authenticateUser(e) {
        e.preventDefault();
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
        dispatch(mutations.requestAuthenticateUser(username, password));
    }
})

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);