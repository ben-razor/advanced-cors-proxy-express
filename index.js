var proxy = require('express-http-proxy');
const express = require('express')

var cors = require('cors');

const config = [
  { url: 'https://axelar-api.polkachu.com', port: 17770 },
  { url: 'https://axelar-rpc.polkachu.com', port: 17771 },
  { url: 'https://rest.atlantic-2.seinetwork.io', port: 17779 },
  { url: 'https://rpc.atlantic-2.seinetwork.io', port: 17781 },
  { url: 'https://api-sommelier.pupmos.network', port: 17782 },
  { url: 'https://rpc-sommelier.pupmos.network', port: 17783 },
  { url: 'https://api.osl.zone', port: 17784 },
  { url: 'https://rpc.osl.zone', port: 17785 },
  { url: 'https://juno.api.kjnodes.com', port: 17786 },
  { url: 'https://rpc-juno.pupmos.network', port: 17787 },
  { url: 'https://api-stargaze.pupmos.network', port: 17788 },
  { url: 'https://rpc-stargaze.pupmos.network', port: 17789 },
  { url: 'https://stride.api.chandrastation.com', port: 17790 },
  { url: 'https://stride.rpc.chandrastation.com', port: 17791 },
  { url: 'https://kujira.api.kjnodes.com', port: 17792 },
  { url: 'https://rpc-kujira.starsquid.io', port: 17793 },
  { url: 'https://mars-api.lavenderfive.com', port: 17794 },
  { url: 'https://mars-rpc.lavenderfive.com', port: 17795 },
  { url: 'https://terra-lcd.stakely.io', port: 17796 },
  { url: 'https://terra-rpc.stakely.io', port: 17797 },
  { url: 'https://secret-4.api.trivium.network:1317', port: 17798 },
  { url: 'https://secret-4.api.trivium.network:26657', port: 17799 },
  { url: 'https://noble-api.polkachu.com', port: 18002 },
  { url: 'https://noble-rpc.polkachu.com', port: 18003 },
  { url: 'https://injective-api.polkachu.com', port: 18004 },
  { url: 'https://injective-rpc.polkachu.com', port: 18005 },
  { url: 'https://api.carbon.network', port: 18006 },
  { url: 'https://tm-api.carbon.network', port: 18007 },
  { url: 'https://api-crescent.pupmos.network', port: 18008 },
  { url: 'https://rpc-crescent.pupmos.network', port: 18009 },
  { url: 'https://umee-lcd.quantnode.tech', port: 18010 },
  { url: 'https://umee-rpc.quantnode.tech', port: 18011 },
  { url: 'https://lcd-evmos.whispernode.com', port: 18012 },
  { url: 'https://evmos-rpc.polkachu.com', port: 18013 },
  { url: 'https://rest.omniflix.network', port: 18014 },
  { url: 'https://rpc.omniflix.network', port: 18015 },
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
