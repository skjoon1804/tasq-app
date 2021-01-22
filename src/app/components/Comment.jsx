import React from 'react';
import {connect} from 'react-redux';
import {ConnectedCommentDetail} from './CommentDetail';

const Comment = ({users, comments}) => (
    <div className="card">
        <div className="card-body text-left m-1">
            <h5 className="card-title">Comments</h5>
            <div className="m-3">
                {comments.map(comment =>(
                    <ConnectedCommentDetail key={comment.id} {...comment}/>
                ))}
            </div>
            <div className="input-group">
                <input type="text" className="form-control"></input>
                <button className="btn btn-light">Add</button>
            </div>

        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    let taskId = ownProps.taskId;
    return {
        users: state.users,
        comments: state.comments.filter(comment => comment.task === taskId)
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     // ownerID,
//     // taskID,
//     // content,


//     return {
//         addComment() {
//             // dispatch(requestAddComment());
//         }
//     }
// };

export const ConnectedComment = connect(mapStateToProps)(Comment);



/*
Properties
    * Who created it
    * Its contents
    * Which task it applies to

Required
    * Comment creation saga
    * Comment reducer
    * comment creation route
*/