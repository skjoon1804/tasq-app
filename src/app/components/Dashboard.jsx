import { connect } from 'react-redux';
import React from 'react';
import { ConnectedTaskList } from './TaskList';

const Dashboard = ({groups})=>(
    <div className="row">
        {groups.map(group=>(
            <ConnectedTaskList key={group.id} {...group} />
        ))}
    </div>
);

const mapStateToProps = ({groups}) => ({
    groups
});

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);