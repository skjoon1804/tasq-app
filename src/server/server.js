import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {connectDB} from './connect-db';
import './initialize-db';
import {authenticationRoute} from './authenticate';
import path from 'path';


let port = process.env.PORT || 7777;
let app = express();

app.use(
    cors(),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json()
);
app.listen(port, console.log("Server listening on port", port));

authenticationRoute(app);

if (process.env.NODE_ENV == `production`) {
    app.use(express.static(path.resolve(__dirname, `../../dist`)));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve('index.html'));
    });
}

export const addNewTask = async task => {
    let db = await connectDB();
    let collection = db.collection(`tasks`);
    await collection.insertOne(task);
};

export const updateTask = async task => {
    let {id, group, isComplete, name} = task;
    let db = await connectDB();
    let collection = db.collection(`tasks`);

    if (group) {
        await collection.updateOne({id}, {$set: {group}});  // find matching id, 
    }
    if (name) {
        await collection.updateOne({id}, {$set: {name}}); 
    }
    if (isComplete !== undefined) {
        await collection.updateOne({id}, {$set: {isComplete}}); 
    }
};

export const deleteTask = async task => {
    let db = await connectDB();
    let collection = db.collection(`tasks`);
    await collection.deleteOne({"id": task});
}

export const deleteComment = async task => {
    let db = await connectDB();
    let collection = db.collection(`comments`);
    await collection.deleteMany({"task": task});
}

export const addNewComment = async comment => {
    let db = await connectDB();
    let collection = db.collection(`comments`);
    await collection.insertOne(comment);
}

export const addNewUser = async user => {
    let db = await connectDB();
    let collection = db.collection(`users`);
    await collection.insertOne(user);
}

// -----------------------

app.post('/task/new', async (req, res) => {
    let task = req.body.task;
    await addNewTask(task);
    res.status(200).send();
})

app.post('/task/update', async (req, res) => {
    let task = req.body.task;
    await updateTask(task);
    res.status(200).send();
})

app.delete('/task', async (req, res) => {
    let task = req.body.taskId;
    await deleteTask(task);
    res.status(200).send();
})

app.post('/task/comment', async (req, res) => {
    let comment = req.body.comment;
    await addNewComment(comment);
    res.status(200).send();
})

app.delete('/task/comment', async (req, res) => {
    let task = req.body.taskId;
    await deleteComment(task);
    res.status(200).send();
})

app.post('/user/new', async (req, res) => {
    let user = req.body.user;
    
    let db = await connectDB();
    let collection = db.collection(`users`);
    let check = await collection.findOne({name: user.name});
    if (check) {
        res.status(500).send("User already exists!");
    } else {
        await addNewUser(user);
        res.status(200).send();
    }
})