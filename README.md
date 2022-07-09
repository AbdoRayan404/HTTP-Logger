# HTTP-Logger
Express simple to use HTTP Logging middleware.
# How to use it?
So first you will need Dotenv package to load the process.env if you having problem loading it<br>
As for logging requests body don't forget to use express.json() middleware before httpLogger.
```JS
require('dotenv').config();
const express = require('express');
const app = express();

const httpLogger = require('logit-http');

app.use(express.json());
app.use(httpLogger());

app.listen(3000, ()=>console.log('pingo !'));
```
Also do not forget to setup the .env to have LOG_BODY field :D (follow the sample.env)
