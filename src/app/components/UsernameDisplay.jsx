import React from 'react';
import {connect} from 'react-redux';

const UsernameDisplay = ({name}) => (
    <h4>Welcome, {name}</h4>
)

const mapStateToProps = (state, ownProps) => {
    return state.users.find(user => user.id === ownProps.id);
}

export const ConnectedUsernameDisplay = connect(mapStateToProps)(UsernameDisplay);