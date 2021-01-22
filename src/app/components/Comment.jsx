import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {ConnectedCommentDetail} from './CommentDetail';
import * as mutations from '../store/mutations';

const Comment = ({owner, comments, addComment}) => {
    const commentRef = useRef();

    function submitComment(e) {
        e.preventDefault();
        addComment(owner, commentRef.current.value);
        commentRef.current.value = "";
    }

    return (
    <div className="card">
        <div className="card-body text-left m-1">
            <h5 className="card-title">Comments</h5>
            <div className="m-3">
                {comments.map(comment =>(
                    <ConnectedCommentDetail key={comment.id} {...comment}/>
                ))}
            </div>
            <form onSubmit={submitComment}>
                <div className="input-group">
                    <input type="text" className="form-control" ref={commentRef}></input>
                    <button type="submit" className="btn btn-light">Add</button>
                </div>
            </form>
        </div>
    </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    let taskId = ownProps.taskId;
    let owner = state.session.id;
    return {
        owner,
        comments: state.comments.filter(comment => comment.task === taskId)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    let taskID = ownProps.taskId;
    return {
        addComment(ownerID, content) {
            dispatch(mutations.requestAddComment(ownerID, taskID, content));
        }
    }
};

export const ConnectedComment = connect(mapStateToProps, mapDispatchToProps)(Comment);