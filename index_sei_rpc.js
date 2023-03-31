var proxy = require('express-http-proxy')
var app = require('express')()
var cors = require('cors')

const PORT = 17781
//const URL = 'https://sei-testnet-rpc.polkachu.com'
//const URL = 'https://sei-testnet.rpc.kjnodes.com'
//const URL = 'https://sei-testnet-rpc.orbitalcommand.io'
const URL = 'https://rpc.atlantic-2.seinetwork.io'
//const URL = 'https://sei-testnet-2-rpc.brocha.in'

app.use(cors())
app.use(proxy(URL)) 

app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`)
})

