import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as mutations from '../store/mutations';

export const Signup = ({signupUser}) => {

    return (
        <form onSubmit={signupUser} className="p-4">
            <div className="">
                <div className="form-group">
                    <label className="m-1" htmlFor="username">Username</label>
                    <input className="m-1" name="username" id="username" type="text" required></input>
                </div>
                <div className="form-group">
                    <label className="m-1" htmlFor="password">Password</label>
                    <input className="m-1" name="password" id="password" type="password" required></input>
                </div>
            </div>
            <button type="submit" className="btn btn-primary m-2">Sign up!</button>
            <button type="button" className="btn btn-light m-2"><Link to="/">Cancel</Link></button>
        </form>
    );
};

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signupUser(e) {
            e.preventDefault();
            const username = e.target[`username`].value;
            const password = e.target[`password`].value;
            dispatch(mutations.requestAddUser(username, password));
        }
    }
}

export const ConnectedSignup = connect(mapStateToProps, mapDispatchToProps)(Signup);