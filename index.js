const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const PORT = 4000;
const initialState = require('./db/data')


const corsOptions = {
    origin: "http://localhost:3000",
    methods: ['GET','POST','OPTIONS'],
    credentials: true,
};

app.use(cors(corsOptions));

app.use(routes)

app.use(express.json({strict:false}));

app.get('/profile', (req, res) => {
    res.status(200).send(initialState)
})

const server = app.listen(PORT, () => {
    console.log(`[RUN] Who I am Server... | http://localhost:${PORT}`);
});

module.exports = server;
