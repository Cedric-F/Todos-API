const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const URI = process.env.ATLAS;
const TodosRouter = require('./routes/todos');

/* Server configuration */

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

/* Connection to MongoDB Todos Collection */

mongoose.connect(URI, { useUnifiedTopology:true, useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => console.log("[MongoDB] Connection established to Todos!"));

/* Routes handlers */

app.use('/api/', TodosRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'));

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

/* Listening to port */

app.listen(PORT, () => console.log("[Express] Listening to port 5000!"));