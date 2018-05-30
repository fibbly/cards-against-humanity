const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const databaseURI = process.env.MONGODB_URI || 'mongodb://localhost/cards_against_humanity';

app.use(bodyParser.json());
mongoose.connect(databaseURI);

const db = mongoose.connection;
const User = require('./models/user');

app.get('/', (req, res) => {
    res.send('hi');
});

app.get('/api/users', (req, res) => {
    User.getUsers((err, users) => {
        if(err) throw err;
        res.json(users);
    });
});


app.post('/api/users', (req, res) => {
    let user = req.body;
    User.addUser(user, (err, user) => {
        if(err) throw err;
        res.json(user);
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));