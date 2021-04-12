const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const PORT = 4000;

const routes = require('./routes');

app.use('/api/v1/auth', routes.auth);
// app.use('/api/v1/users', routes.users);
// app.use('/api/v1/house', routes.house);

app.listen(PORT, () => console.log(`Server connected at http://localhost:${PORT}... ITS WORKING!!!!!`));