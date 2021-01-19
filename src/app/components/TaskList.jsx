import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({tasks, name}) => (
    <>
        <h3>{name}</h3>
        {tasks.map(task => (
            <div key={task.id}>
                {task.name}
            </div>
        ))}
    </>
)
const mapStateToProps = (state, ownProps) => {
    let groupId = ownProps.id;
    return {
        name: ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task => task.group === groupId)
    }
}

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);