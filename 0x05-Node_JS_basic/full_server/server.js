#!/usr/bin/node
const express = require('express');
const router = require('./routes/index');

const app = express();
app.use('/', router);
app.listen(1245, 'localhost');

export default app;
