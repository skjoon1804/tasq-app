import React from 'react';
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations'
import {withRouter, Link} from 'react-router-dom';

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div>
        <h3>{name}</h3>
        {tasks.map(task => (
            <Link key={task.id} to={`/task/${task.id}`}>  
                <div>
                        {task.name}
                </div>
            </Link>
        ))}
        <button onClick={() => createNewTask(id)}>Add New</button>
    </div>
)



const mapStateToProps = (state, ownProps) => {
    let groupId = ownProps.id;
    return {
        name: ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task => task.group === groupId)
    }
}

const mapDispatchToProps = (dispatch, {id}) => ({
    createNewTask() {
        dispatch(requestTaskCreation(id));
    }
});

export const ConnectedTaskList = withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskList));