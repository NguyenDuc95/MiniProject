const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');
const mongoose = require('mongoose');
const Todos = require('./api/models/todoModel');
const setupControler = require('./api/controllers/setupController');
const todoController = require('./api/controllers/todoController');

const app = express();
// bien moi truong
const port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public/'));
app.use(bodyParser.json());
// extend to can use more type of data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');
setupControler(app);
todoController(app);
mongoose.connect(config.getDbConnectionString());

app.get('/', (req, res) => {
    res.render('index.ejs');
});

// start server
app.listen(port, () => {
    console.log(`Server started on port`);
});