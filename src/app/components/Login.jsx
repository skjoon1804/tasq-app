import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as mutations from '../store/mutations';

const LoginComponent = ({authenticateUser, authenticated}) => {
    return (
        <div className="container card p-3 col-md-4">
            <form onSubmit={authenticateUser}>
                <input type="text" placeholder="username" name="username" defaultValue="Dev" className="form-control"/>
                <input type="password" placeholder="password" name="password" defaultValue="" className="form-control mt-2"/>
                {authenticated === mutations.NOT_AUTHENTICATED ? <p class="text-danger">Login Incorrect</p> : null}
                <button type="submit" className="form-control mt-2 btn btn-primary">Login</button>
            </form>
            <p>New User? <a href="#">Sign up</a></p> 
        </div>
    );
};

const mapStateToProps = ({session}) => ({
    authenticated: session.authenticated
})
const mapDispatchToProps = (dispatch) => ({
    authenticateUser(e) {
        e.preventDefault();
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
        dispatch(mutations.requestAuthenticateUser(username, password));
    }
})

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);