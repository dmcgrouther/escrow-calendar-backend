const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const PORT = 4000;
require('dotenv').config();

const routes = require('./routes');

//body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongoUrl: process.env.LOCAL_DATABASE }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
}));

app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/users', routes.users);
app.use('/api/v1/house', routes.house);

app.listen(PORT, () => console.log(`Server connected at http://localhost:${PORT}... ITS WORKING!!!!!`));