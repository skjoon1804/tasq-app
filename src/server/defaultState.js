export const defaultState = {
    users: [{
        id: "U1",
        name: "Dev"
    }],
    groups: [{
        name: "To Do",
        id: "G1",
        owner: "U1"
    }],
    tasks: [{
        name: "Do tests",
        id: "T1",
        group: "G1",
        owner: "U1",
        isComplete: false
    }],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Great work!!!"
    }]
}