var proxy = require('express-http-proxy');
const express = require('express')

var cors = require('cors');

const config = [
  { url: 'https://axelar-api.polkachu.com', port: 17770 },
  { url: 'https://axelar-rpc.polkachu.com', port: 17771 },
  { url: 'https://api-sommelier.pupmos.network', port: 17782 },
  { url: 'https://rpc-sommelier.pupmos.network', port: 17783 },
  { url: 'https://api-osmosis.pupmos.network', port: 17784 },
  { url: 'https://rpc.osl.zone', port: 17785 },
  { url: 'https://api-juno.pupmos.network', port: 17786 },
  { url: 'https://rpc-juno.pupmos.network', port: 17787 },
  { url: 'https://api-stargaze.pupmos.network', port: 17788 },
  { url: 'https://rpc-stargaze.pupmos.network', port: 17789 },
  { url: 'https://stride.api.chandrastation.com', port: 17790 },
  { url: 'https://stride.rpc.chandrastation.com', port: 17791 },
  { url: 'https://rest-kujira.ecostake.com', port: 17792 },
  { url: 'https://rpc-kujira.starsquid.io', port: 17793 }
]

for(let p of config) {
  ;(async () => {
    var app = express();

    app.use(cors())
    app.use(proxy(p.url))

    app.listen(p.port, () => {
      console.log(`Proxy ${p.url} to ${p.port}`)
    })
  })();
}
