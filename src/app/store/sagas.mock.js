import {take, put, select} from 'redux-saga/effects';
import * as mutations from './mutations';
import uuid from 'uuid';

export default function* taskCreationSaga() {
    while (true) {
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        console.log("Got Group ID: ", groupID);
    }
}
