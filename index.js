const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://user:pass@localhost:PORT/joga_sequelize');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database')
    })
    .catch(err => {
        console.error('Unable to connect to database:', err);
    });

const articleRouter = require('./routes/article');
const authorRouter = require('./routes/author');
app.use('/', articleRouter);
app.use('/article', articleRouter);
app.use('/author', authorRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});