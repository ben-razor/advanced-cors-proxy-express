var proxy = require('express-http-proxy');
var app = require('express')();
var cors = require('cors');

const PORT = 17782
const URL = 'https://api-sommelier.pupmos.network'

app.use(cors())
app.use(proxy(URL))

app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`)
})
