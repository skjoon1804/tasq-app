import React from 'react';
import {connect} from 'react-redux';

const CommentDetail = ({name, content}) => (
    <>
        <h6 className="m-0">{name}</h6>
        <p className="m-0">{content}</p>
    </>
)

const mapStateToProps = (state, ownProps) => {
    let {name} = state.users.find(user => user.id === ownProps.owner);
    return {
        name,
        content: ownProps.content
    }
}

export const ConnectedCommentDetail = connect(mapStateToProps)(CommentDetail);