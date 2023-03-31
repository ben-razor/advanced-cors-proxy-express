var proxy = require('express-http-proxy');
var app = require('express')();
var cors = require('cors');

const PORT = 17779
//const URL = 'https://sei-testnet-api.polkachu.com'
//const URL = 'https://sei-testnet.api.kjnodes.com'
//const URL = 'https://sei-testnet-lcd.orbitalcommand.io'
const URL = 'https://rest.atlantic-2.seinetwork.io'
//const URL = 'https://sei-testnet-2-rest.brocha.in'

app.use(cors())
app.use(proxy(URL))

app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`)
})
