import {take, put, select} from 'redux-saga/effects';
import uuid from 'react-uuid';
import axios from 'axios';
import * as mutations from './mutations';
import {history} from './history';
import md5 from 'md5';

const url = process.env.NODE_ENV == `production` ? `` : "http://localhost:7777";

export function* taskCreationSaga() {
    while (true) {
        const {ownerID, groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const taskID = uuid();
        yield put(mutations.createTask(taskID, groupID, ownerID));
        const {res} = yield axios.post(url + `/task/new`, {
            task: {
                id: taskID,
                group: groupID,
                owner: ownerID,
                isComplete: false,
                name: "New task"
            }
        });
    }
};

export function* taskModificationSaga() {
    while (true) {
        const task = yield take([mutations.SET_TASK_GROUP, mutations.SET_TASK_NAME, mutations.SET_TASK_COMPLETE]);
        axios.post(url + `/task/update`, {
            task: {
                id: task.taskID,
                group: task.groupID,
                name: task.name,
                isComplete: task.isComplete
            }
        });
    }
}

export function* taskDeleteSaga() {
    while (true) {
        const task = yield take(mutations.DELETE_TASK);
        try {
            // task delete
            axios.delete(url + `/task`, {
                data: {
                    taskId: task.taskID
                }
            });
            // delete all comments under specified task
            axios.delete(url + `/task/comment`, {
                data: {
                    taskId: task.taskID
                }
            })
            history.push('/dashboard');
        } catch (e) {
            console.log("Cannot delete task");
        }
    }
}

export function* userCreationSaga() {
    while (true) {
        const {username, password} = yield take(mutations.REQUEST_ADD_USER);
        const id = uuid();
        const passwordHash = md5(password);
        yield put(mutations.addUser(username, passwordHash, id));
        try {
            yield axios.post(url + `/user/new`, {
                user: {
                    name: username,
                    id,
                    passwordHash: passwordHash,
                    friends: []
                }
            });

            alert("User successfully created!")
            history.push('/');
        } catch (e) {
            alert("User already exists")
        }
    }
}

export function* commentCreationSaga() {
    while (true) {
        const {ownerID, taskID, content} = yield take(mutations.REQUEST_ADD_COMMENT);
        const commentID = uuid();
        yield put(mutations.addComment(ownerID, taskID, commentID, content));
        try {
            yield axios.post(url + `/task/comment`, {
                comment: {
                    owner: ownerID,
                    id: commentID,
                    task: taskID,
                    content: content
                }
            });
        } catch (e) {
            console.log("Cannot Add Comment");
        }
    }
}

export function* userAuthenticationSaga() {
    while (true) {
        const {username, password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
        try {
            const {data} = yield axios.post(url + `/authenticate`, {username, password});
            if (!data) {
                throw new Error();
            }
            console.log("Authenticated", data);

            yield put(mutations.setState({...data.state})); 
            yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));
            history.push('/dashboard');

        } catch (e) {
            console.log("Cannot Authenticate");
            yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
        }
    }
}