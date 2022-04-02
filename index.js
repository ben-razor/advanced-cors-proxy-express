var proxy = require('express-http-proxy');
var app = require('express')();
var cors = require('cors');

const PORT = 7777;
const URL = 'http://88.99.89.209:7777';

app.use(cors())
app.use(proxy(URL));

app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`)
})