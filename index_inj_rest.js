var proxy = require('express-http-proxy');
var app = require('express')();
var cors = require('cors');

const PORT = 17784
//const URL = 'https://osmosis-api.polkachu.com'
//const URL = 'https://api.osl.zone'
const URL = 'https://api-osmosis.pupmos.network'

app.use(cors())
app.use(proxy(URL))

app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`)
})
