const express = require('express');
const router = require('./router');
// const router = require('./router.js');

const app = express();
// add .env support
const PORT = 3000 || process.env.PORT;

app.use(express.json());
// app.use(express.urlencoded());

app.use('/', router);

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
