import { connect } from 'react-redux';
import React from 'react';
import { ConnectedTaskList } from './TaskList';
import { ConnectedUsernameDisplay } from './UsernameDisplay';

const Dashboard = ({groups, id})=>(
    <>
        <ConnectedUsernameDisplay id={id}/>
        <div className="row">
            {groups.map(group=>(
                <ConnectedTaskList key={group.id} {...group} />
            ))}
        </div>
    </>
);

const mapStateToProps = (state) => {
    return {
        groups: state.groups,
        id: state.session.id
    };
};

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);