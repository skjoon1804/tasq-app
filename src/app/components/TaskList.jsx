import React from 'react';
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations'
import {withRouter, Link} from 'react-router-dom';

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div className="col card p-2 m-2">
        <h3>{name}</h3>
        {tasks.map(task => 
            <>
                {task.isComplete ?
                <Link key={task.id} to={`/task/${task.id}`} style={{textDecoration: 'none', textDecoration: 'line-through'}} >
                    <div className="card p-2 mt-2">{task.name}</div>
                </Link>:  
                <Link key={task.id} to={`/task/${task.id}`} style={{textDecoration: 'none'}} >
                    <div className="card p-2 mt-2">{task.name}</div>
                </Link>
                }
            </>
        )}
        <button onClick={() => createNewTask(id)} className="btn btn-primary btn-block mt-2">Add New</button>
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