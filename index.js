var proxy = require('express-http-proxy');
var app = require('express')();
var cors = require('cors');

const PORT = 7777;
const URL = 'http://localhost:7778';

app.use(cors())
app.use(proxy(URL));

app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`)
})
