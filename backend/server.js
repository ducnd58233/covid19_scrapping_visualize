const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost/project', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


/* ---------------------------------------------------- 
                START: Middleware
---------------------------------------------------- */

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());


const reloadScrappingMiddleware = require('./middlewares/reloadScrappingMiddleware');

/* ---------------------------------------------------- 
                END: Middleware
---------------------------------------------------- */

/* ---------------------------------------------------- 
        START: Declare folder of controller
---------------------------------------------------- */
const getDataController = require('./controllers/getDataController');
/* ---------------------------------------------------- 
        END: Declare folder of controller
---------------------------------------------------- */
app.get('/', getDataController);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
