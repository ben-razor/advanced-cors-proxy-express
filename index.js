var proxy = require('express-http-proxy');
const express = require('express')

var cors = require('cors');

const config = [
  // { url: 'https://axelar-api.polkachu.com', port: 17770 },
  // { url: 'https://axelar-rpc.polkachu.com', port: 17771 },
  { url: 'https://axelar-api.polkachu.com', port: 17770 },
  { url: 'https://axelar-rpc.polkachu.com', port: 17771 },
  { url: 'https://rest.axelar-testnet.lava.build/lava-referer-98920b3a-72c1-4781-b902-1cffca7c812a/', port: 27770 }, // Testnet 
  { url: 'https://tm.axelar-testnet.lava.build/lava-referer-98920b3a-72c1-4781-b902-1cffca7c812a/', port: 27771 }, // Testnet
  { url: 'https://rest.atlantic-2.seinetwork.io', port: 17779 },
  { url: 'https://rpc.atlantic-2.seinetwork.io', port: 17781 },
  { url: 'https://api-sommelier.pupmos.network', port: 17782 },
  { url: 'https://rpc-sommelier.pupmos.network', port: 17783 },
  { url: 'https://rest-osmosis.ecostake.com', port: 17784 },
  //{ url: 'https://osmosis-api.polkachu.com', port: 17784 },
  // { url: 'https://api.osl.zone', port: 17784 },
  // { url: 'https://osmosis-api.w3coins.io', port: 17784 },
  // { url: 'https://osmosis-rpc.stakely.io', port: 17785 },
  //{ url: 'https://osmosis-rpc.publicnode.com', port: 17785 },
   { url: 'https://osmosis-rpc.polkachu.com', port: 17785 },
  { url: 'https://juno-api.polkachu.com', port: 17786 },
  { url: 'https://juno-rpc.polkachu.com', port: 17787 },
  { url: 'https://api-stargaze.pupmos.network', port: 17788 },
  { url: 'https://rpc-stargaze.pupmos.network', port: 17789 },
  { url: 'https://stride-api.polkachu.com', port: 17790 },
  { url: 'https://stride-rpc.polkachu.com', port: 17791 },
  { url: 'https://kujira.api.kjnodes.com', port: 17792 },
  { url: 'https://rpc-kujira.starsquid.io', port: 17793 },
  { url: 'https://mars-api.lavenderfive.com', port: 17794 },
  { url: 'https://mars-rpc.lavenderfive.com', port: 17795 },
  { url: 'https://terra-lcd.stakely.io', port: 17796 },
  { url: 'https://terra-rpc.stakely.io', port: 17797 },
  { url: 'https://secret-4.api.trivium.network:1317', port: 17798 },
  //{ url: 'https://secretnetwork-api.highstakes.ch', port: 17798 },
  //{ url: 'https://rest.lavenderfive.com:443/secretnetwork', port: 17798 },
  //{ url: 'http://secretnetwork-mainnet-lcd.autostake.com', port: 17798 },
  //{ url: 'https://lcd.mainnet.secretsaturn.net', port: 17798 },
  //{ url: 'https://rest-secret.01node.com', port: 17798 },
  //{ url: 'https://secretnetwork.lavenderfive.com:443', port: 17798 },
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
  { url: 'https://umee-rpc.polkachu.com', port: 18011 },
  { url: 'https://evmos-lcd.stakely.io', port: 18012 },
  { url: 'https://evmos-rpc.polkachu.com', port: 18013 },
  //{ url: 'https://rest.omniflix.network', port: 18014 },
  //{ url: 'https://rpc.omniflix.network', port: 18015 },
  { url: 'https://api.omniflix.nodestake.org', port: 18014 },
  { url: 'https://omniflix-rpc.kingnodes.com', port: 18015 },
  { url: 'https://nibiru-testnet.api.kjnodes.com', port: 18016 },
  { url: 'https://nibiru-testnet.rpc.kjnodes.com', port: 18017 },
  //{ url: 'https://cosmoshub-api.lavenderfive.com', port: 18018 },
  //{ url: 'https://cosmoshub-rpc.lavenderfive.com', port: 18019 },
  { url: 'https://cosmos.api.silknodes.io', port: 18018 },
  { url: 'https://cosmos-rpc.polkachu.com', port: 18019 },
  { url: 'http://localhost:1317', port: 18020 },
  { url: 'http://localhost:26657', port: 18021 },
  { url: 'https://sei-api.polkachu.com', port: 18022 },
  { url: 'https://sei-rpc.polkachu.com', port: 18023 },
  { url: 'https://celestia-api.polkachu.com', port: 18024 },
  { url: 'https://celestia-rpc.polkachu.com', port: 18025 },
  { url: 'https://jackal-api.polkachu.com', port: 18026 },
  { url: 'https://jackal-rpc.polkachu.com', port: 18027 },
  { url: 'https://picasso-api.polkachu.com', port: 18028 },
  { url: 'https://picasso-rpc.polkachu.com', port: 18029 },
  { url: 'https://dymension-api.lavenderfive.com', port: 18030 },
  { url: 'https://dymension-rpc.lavenderfive.com', port: 18031 },
  { url: 'https://atomone-api.allinbits.com', port: 18032 },
  { url: 'https://atomone-rpc.allinbits.com:443', port: 18033 },
  { url: 'https://practical-warmhearted-diagram.solana-mainnet.quiknode.pro/3328ba1b4260aba5f8d9ac5a99c18f6fbfb916ab', port: 19001}
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
