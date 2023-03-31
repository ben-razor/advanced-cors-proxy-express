var proxy = require('express-http-proxy')
var app = require('express')()
var cors = require('cors')

const PORT = 17787
//const URL = 'https://rpc-juno.keplr.app'
const URL = 'https://rpc-juno.pupmos.network'

app.use(cors())
app.use(proxy(URL)) 

app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`)
})

