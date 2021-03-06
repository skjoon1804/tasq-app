export const REQUEST_TASK_CREATION = `REQUEST_TASK_CREATION`;
export const CREATE_TASK = `CREATE_TASK`;
export const SET_TASK_COMPLETE = `SET_TASK_COMPLETE`;
export const SET_TASK_GROUP = `SET_TASK_GROUP`;
export const SET_TASK_NAME = `SET_TASK_NAME`;
export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;
export const PROCESSING_AUTHENTICATE_USER = `PROCESSING_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
export const SET_STATE = `SET_STATE`;
export const DELETE_TASK = `DELETE_TASK`;
export const REQUEST_ADD_COMMENT = `REQUEST_ADD_COMMENT`;
export const ADD_COMMENT = `ADD_COMMENT`;
export const DELETE_COMMENT = `DELETE_COMMENT`;
export const REQUEST_ADD_USER = `REQUEST_ADD_USER`;
export const ADD_USER = `ADD_USER`;
export const REQUEST_ADD_GROUP = `REQUEST_ADD_GROUP`;
export const ADD_GROUP = `ADD_GROUP`;


export const requestTaskCreation = (ownerID, groupID) => ({
    type: REQUEST_TASK_CREATION,
    ownerID,
    groupID
})

export const createTask = (taskID, groupID, ownerID) => ({
    type: CREATE_TASK,
    taskID,
    groupID,
    ownerID
});

export const setTaskCompletion = (id, isComplete) => ({
    type: SET_TASK_COMPLETE,
    taskID: id,
    isComplete
})

export const setTaskName = (id, name) => ({
    type: SET_TASK_NAME,
    taskID: id,
    name
})

export const setTaskGroup = (id, groupID) => ({
    type: SET_TASK_GROUP,
    taskID: id,
    groupID
})

export const requestAuthenticateUser = (username, password) => ({
    type: REQUEST_AUTHENTICATE_USER,
    username,
    password
})

export const processAuthenticateUser = (status=AUTHENTICATING, session=null) => ({
    type: PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status
})

export const setState = (state = {}) => ({
    type: SET_STATE,
    state
})

export const deleteTask = (taskID) => {
    return {
        type: DELETE_TASK,
        taskID
}}

export const requestAddComment = (ownerID, taskID, content) => ({
    type: REQUEST_ADD_COMMENT,
    ownerID,
    taskID,
    content,
})

export const addComment = (ownerID, taskID, commentID, content) => ({
    type: ADD_COMMENT,
    ownerID,
    taskID,
    commentID,
    content
})

export const deleteComment = (taskID) => {
    return {
        type: DELETE_COMMENT,
        taskID
    }
}

export const requestAddUser = (username, password) => {
    return {
        type: REQUEST_ADD_USER,
        username,
        password,
    }
}

export const addUser = (username, passwordHash, id) => {
    return {
        type: ADD_USER,
        username,
        passwordHash,
        id
    }
}

export const requestAddGroup = () => {
    return {
        type: REQUEST_ADD_GROUP,
        name,
        owner
    }
}

export const addGroup = (name, owner, id) => {
    return {
        type: ADD_GROUP,
        name,
        owner,
        id
    }
}