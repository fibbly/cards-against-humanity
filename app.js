const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const databaseURI = process.env.MONGODB_URI || 'mongodb://localhost/cards_against_humanity';

mongoose.connect(databaseURI);
const db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('hi');
});

app.listen(port, () => console.log(`Server running on port ${port}`));