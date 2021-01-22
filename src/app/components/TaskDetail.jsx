import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as mutations from '../store/mutations';
import { deleteTask} from "../store/mutations";

const TaskDetail = ({
    comments,
    groups,
    tasks,
    match,

    setTaskCompletion,
    setTaskName,
    setTaskGroup,
    deleteTask
}) => {
    const id = match.params.id;
    const task = tasks.find(task => task.id === id);
    const isComplete = tasks.isComplete;

    return (
        <div className="container card p-3 col-6">
            <div>
                <input onChange={setTaskName} value={task.name} className="form-control form-control-lg" />
            </div>
            <div>
                <button className="btn btn-primary mt-2" onClick={() => setTaskCompletion(id, !isComplete)}>{isComplete ? `Reopen` : `Complete`}</button> 
            </div>
            <div className="mt-3">
                <select onChange={setTaskGroup} value={task.group} className="form-control">
                    {groups.map(group => (
                        <option key={group.id} value={group.id}>{group.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <Link to="/dashboard"><button className="btn btn-primary m-4">Done</button></Link>
                <button onClick={() => deleteTask(id)}className="btn btn-danger m-4">Delete</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks,
        groups: state.groups
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        setTaskCompletion(id, isComplete) {
            dispatch(mutations.setTaskCompletion(id, isComplete));
        },
        setTaskGroup(e) {
            dispatch(mutations.setTaskGroup(id, e.target.value));
        },
        setTaskName(e) {
            dispatch(mutations.setTaskName(id, e.target.value));
        },
        deleteTask(id) {
            dispatch(deleteTask(id));
        }
    }
}

export const ConnectedTaskDetail = connect(mapStateToProps, mapDispatchToProps)(TaskDetail);