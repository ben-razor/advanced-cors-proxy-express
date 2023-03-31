var proxy = require('express-http-proxy')
var app = require('express')()
var cors = require('cors')

const PORT = 17785
//const URL = 'https://rpc-osmosis.pupmos.network'
const URL = 'https://rpc.osl.zone'

app.use(cors())
app.use(proxy(URL)) 

app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`)
})

