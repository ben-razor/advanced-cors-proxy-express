var proxy = require('express-http-proxy');
var app = require('express')();
var cors = require('cors');

const PORT = 17786
//const URL = 'https://juno-api.polkachu.com'
const URL = 'https://api-juno.pupmos.network'

app.use(cors())
app.use(proxy(URL))

app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`)
})
