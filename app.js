const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
 
const Sequelize = require('sequelize');
const db = new Sequelize('codegig', 'root', '', {
        dialect : process.env.DIALECT || 'mysql',
        host    : process.env.HOST    || '127.0.0.1',
        storage : './scoutout.sqlite'
});

const app = express();

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error' + err));

app.get('/', (req, res) => {
    res.send("INDEX");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server started on PORT: ${PORT}`);
})