import { getErrorResponse, getSuccessResponse } from "../helpers/request.js"
import { IBC_CHANNELS } from "./cosmos/ibc/channels.js"

const rpcInfo = [
  {
      id: "evmos",
      rpcs: [
          "http://localhost:18013"
          // "https://evmos-rpc.stakely.io",
          // "https://evmos-rpc.polkachu.com"
      ],
      hosts: [
          "http://localhost:18012"
          // "https://evmos-api.polkachu.com",
          // "https://api.evmos.nodestake.top",
          //cors"https://api.evmos.silknodes.ion",
          //"https://evmos-rest.publicnode.com",
          //slow"https://evmos-api.lavenderfive.com",
          //slow"https://rest.bd.evmos.org:1317",
          //error"https://api-evmos-ia.cosmosia.notional.ventures",
          //disabled"https://rest.evmos.tcnetwork.io",
      ]
  },
  {
      id: "cosmos",
      chain_id: "cosmoshub-4",
      url: "https://cosmoshub-lcd.stakely.io",
      rpcs: [
          "https://cosmoshub-rpc.stakely.io",
          "https://endpoints-testnet-1.lavanet.xyz:443/gateway/cos5/rpc-http/b1ea2aba89310cdab8ae81c44752783d",
          "https://cosmos-rpc.polkachu.com",
          "https://rpc-cosmoshub.keplr.app",
          "https://rpc-cosmoshub.pupmos.network",
      ],
      hosts: [
          "https://api-cosmoshub.pupmos.network",
          //"https://cosmoshub-api.lavenderfive.com",
          //"https://lcd-cosmoshub.blockapsis.com",
          ///"https://cosmoshub.rest.stakin-nodes.com",
          ///"https://rest-cosmoshub.goldenratiostaking.net",
          ///"https://rest-cosmoshub.architectnodes.com",
          ///"https://lcd.cosmos.dragonstake.io",
          ///"https://api.cosmos.interbloc.org",
          ///"https://cosmos-lcd.quickapi.com",
          ///"https://rest-cosmoshub.ecostake.com/"
          ///"https://api.cosmos.bh.rocks",

          //"https://api.cosmos.silknodes.io",
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "secret",
      chain_id: "secret-4",
      url: "https://secretnetwork-lcd.stakely.io",
      rpcs: [
          "http://localhost:17799",
          /*
          "https://rpc.secret.express",
          "https://secretnetwork-rpc.stakely.io",
          "https://scrt.public-rpc.com",
          "https://secret-4.api.trivium.network:26657",
          "https://rpc.spartanapi.dev"
          */
      ],
      hosts: [
          "http://localhost:17798",
          /*
          "https://lcd.secret.express",
          "https://secretnetwork-lcd.stakely.io",
          */
      ],
      emission_api: "annual_provisions",
      endpoints: {}
  },
  {
      id: "juno-network",
      chain_id: "juno-1",
      url: "https://juno-lcd.stakely.io",
      rpcs: [
          "http://localhost:17787",
          /*
          "https://endpoints-testnet-1.lavanet.xyz:443/gateway/jun1/rpc-http/84b187be842dee795ff721f193e90aa6",
          "https://rpc-juno.keplr.app",
          "https://rpc-juno.pupmos.network",
          "https://rpc-juno-ia.cosmosia.notional.ventures"
          */
      ],
      hosts: [
          "http://localhost:17786",
          /*
          "https://api-juno.pupmos.network",
          "https://endpoints-testnet-1.lavanet.xyz:443/gateway/jun1/rest/84b187be842dee795ff721f193e90aa6",
          "https://api.juno.kingnodes.com",
          "https://juno-api.polkachu.com",
          "https://juno-api.reece.sh",
          "https://juno-api.kleomedes.network",
          "https://api.juno.bh.rocks",
          //""https://api-juno-ia.cosmosia.notional.ventures",
          "https://juno.rest.stakin-nodes.com",
          //""https://api.juno.interbloc.org",
          //""https://api.juno.silknodes.io",
          "https://lcd-juno.itastakers.com",
          "https://juno.rest.interchain.ivaldilabs.xyz",
          //""https://juno.nodejumper.io:1317",
          "https://rest-juno.ecostake.com",
          //""https://lcd-juno.whispernode.com"
          */
      ],
      emission_api: "annual_provisions",
      endpoints: {
          ibc_transfer_port_cw20: "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
      }
  },
  {
      id: "stargaze",
      chain_id: "stargaze-1",
      url: "https://api-stargaze.pupmos.network",
      hosts: [
          "http://localhost:17788",
          "https://api-stargaze.pupmos.network",
          "https://stargaze-api.polkachu.com"
      ],
      rpcs: [
          "http://localhost:17789",
          "https://rpc-stargaze.pupmos.network",
          "https://stargaze-rpc.polkachu.com"
      ],
      emission_api: "annual_provisions",
      distribution_api: "stargaze_alloc_params",
      endpoints: {
          stargaze_alloc_params: "/stargaze/alloc/v1beta1/params",
          annual_provisions: "/stargaze/mint/v1beta1/annual_provisions"
      }
  },
  {
      id: "oraichain-token",
      chain_id: "oraichain-1",
      url: "",
      rpcs: [
          "https://stargaze-rpc.polkachu.com",
          "https://rpc-stargaze.pupmos.network"
      ],
      emission_api: "annual_provisions",
      distribution_api: "stargaze_alloc_params",
      endpoints: {
          stargaze_alloc_params: "/stargaze/alloc/v1beta1/params",
          annual_provisions: "/stargaze/mint/v1beta1/annual_provisions"
      }
  },
  {
      id: 'crescent-network',
      chain_id: 'crescent-1',
      hosts: [
          'http://localhost:18008',
          //'https://mainnet.crescent.network:1317/'
      ],
      rpcs: [
          'http://localhost:18009',
          //'https://mainnet.crescent.network:26657'
      ],
      endpoints: {
          crescent_liquidity_pairs: "/crescent/liquidity/v1beta1/pairs",
          crescent_order_books: "/crescent/liquidity/v1beta1/order_books"
      }
  },
  {
      id: 'carbon-protocol',
      chain_id: 'carbon-1',
      hosts: [
          "http://localhost:18006",
      ],
      rpcs: [
          "http://localhost:18007",
      ],
      endpoints: { }
  },
  {
      id: "osmosis",
      chain_id: "osmosis-1",
      url: "https://osmosis-lcd.stakely.io",
      hosts: [
          "http://localhost:17784",
          /*
          "https://api.osl.zone",
          "https://api-osmosis.pupmos.network",
          "https://osmosis-api.polkachu.com",
          "https://lcd.osmosis.zone",
          */
      ],
      rpcs: [
          "http://localhost:17785",
          "https://rpc.osl.zone",
          "https://osmosis-mainnet-rpc.allthatnode.com:26657",
          "https://osmosis-rpc.polkachu.com",
          "https://rpc-osmosis.pupmos.network",
          "https://rpc.osmosis.zone",
      ],
      wss: [
          "wss://rpc-osmosis.pupmos.network/websocket",
          "wss://endpoints-testnet-1.lavanet.xyz:443/gateway/cos3/rpc/0c4a59f5ec1cd58f17ec9eb9d8ebada2",
          "wss://rpc-osmosis-ia.cosmosia.notional.ventures/websocket"
      ],
      pagination_api: "offset_limit",
      emission_api: "epoch_provisions",
      distribution_api: "osmosis_mint_params",
      endpoints: {
          epoch_provisions: "/osmosis/mint/v1beta1/epoch_provisions",
          osmosis_mint_params: "/osmosis/mint/v1beta1/params",
          osmosis_pools: "/osmosis/gamm/v1beta1/pools/",
          osmosis_prices: "/osmosis/gamm/v1beta1/prices?base_asset_denom={base_asset_denom}&quote_asset_denom={quote_asset_denom}"
      }
  },
  {
      id: "teritori",
      url: "https://teritori-api.polkachu.com",
      emission_api: "block_provisions",
      distribution_api: "teritori_mint_params", 
      endpoints: {
          block_provisions: "/teritori/mint/v1beta1/block_provisions",
          teritori_mint_params: "/teritori/mint/v1beta1/params"
      }
  },
  {
      id: "umee",
      url: "https://umee-api.polkachu.com",
      hosts: [
          "http://localhost:18010"
      ],
      rpcs: [
          "http://localhost:18011"
      ],
      pagination_api: "page_limit",
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "injective-protocol",
      chain_id: "injective-1",
      url: "https://injective-api.polkachu.com",
      hosts: [
          "http://localhost:18004",
          /*
          "https://lcd.injective.network",
          "https://injective.crescent.network:1317",
          "https://k8s.global.mainnet.lcd.injective.network:443",
          "https://injective-api.polkachu.com"
          */
      ],
      rpcs: [
          "http://localhost:18005",
          /*
          "https://tm.injective.network",
          "https://injective-rpc.polkachu.com",
          "https://k8s.global.mainnet.tm.injective.network:443",
          */
      ],
      swagger: [
          "https://k8s.global.mainnet.lcd.injective.network/swagger"
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "akash-network",
      chain_id: "akashnet-2", 
      url: "https://akash-api.polkachu.com",
      hosts: [
          "https://akash-api.polkachu.com",
      ],
      rpcs: [
          "https://akash-rpc.polkachu.com",
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "chihuahua-token",
      url: "https://api-chihuahua.pupmos.network",
      hosts: [
          "https://api-chihuahua.pupmos.network",
          //""https://chihuahua-api.kleomedes.network",
          "https://chihuahua-api.lavenderfive.com",
          "https://chihuahua-api.polkachu.com",
          "https://api.huahua.bh.rocks",
          //""https://api-chihuahua-ia.cosmosia.notional.ventures",
          //""https://rest-chihuahua.ecostake.com",
          "https://api.chihuahua.wtf",
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "stride",
      chain_id: "stride-1",
      url: "http://localhost:17790",
      hosts: [
          "http://localhost:17790",
          "https://api-stride.pupmos.network",
          "https://stride.rest.interchain.ivaldilabs.xyz",
          "https://api-stride.pupmos.network",
          "https://stride-api.polkachu.com",
          "https://stride.api.kjnodes.com"
      ],
      rpcs: [
          "http://localhost:17791",
          "https://stride.rpc.kjnodes.com",
          "https://stride-fleet.poolparty.stridenet.co",
          "https://rpc-stride.pupmos.network",
          "https://rpc-stride.keplr.app"
      ],
      emission_api: "epoch_provisions",
      distribution_api: "mint_params",
      pagination_api: "page_limit",
      endpoints: { 
          epoch_provisions: "/mint/v1beta1/epoch_provisions",
          mint_params: "/mint/v1beta1/params",
          stride_stakeibc_host_zone: "/Stride-Labs/stride/stakeibc/host_zone",
      }
  },
  {
      id: "axelar",
      chain_id: "axelar-dojo-1",
      url: "https://axelar-api.polkachu.com",
      hosts: [
          "http://localhost:17770",
          "https://axelar-api.polkachu.com",
          "https://lcd-axelar.whispernode.com",
          "https://axelar-api.validatrium.club",
          "https://api.axelar.bh.rocks"
      ],
      rpcs: [
          "http://localhost:17771",
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "kujira",
      chain_id: "kaiyo-1",
      hosts: [
          "http://localhost:17792",
      ],
      rpcs: [
          "http://localhost:17793",
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "mars-protocol",
      chain_id: "mars-1",
      hosts: [
          "http://localhost:17794",
      ],
      rpcs: [
          "http://localhost:17795",
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "noble",
      chain_id: "noble-1",
      hosts: [
          "http://localhost:18002",
      ],
      rpcs: [
          "http://localhost:18003",
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "omniflix-network",
      chain_id: "omniflixhub-1",
      hosts: [
          "http://localhost:18014",
      ],
      rpcs: [
          "http://localhost:18015",
      ],
      emission_api: "annual_provisions",
      distribution_api: "omniflix_alloc_params",
      endpoints: {
          omniflix_alloc_params: "/omniflix/alloc/v1beta1/params",
      }
  },
  {
      id: "terra",
      chain_id: "phoenix-1",
      hosts: [
          "http://localhost:17796",
      ],
      rpcs: [
          "http://localhost:17797",
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "comdex",
      chain_id: "comdex-1",
      url: "https://comdex-api.polkachu.com",
      rpcs: [
          "https://rpc.comdex.one",
          "https://comdex-rpc.polkachu.com"
      ],
      hosts: [
          "https://comdex-api.polkachu.com",
          "https://rest.comdex.one"
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "sommelier",
      chain_id: "sommelier-3",
      url: "https://api-sommelier.pupmos.network",
      hosts: [
          "http://localhost:17782",
          "https://lcd-sommelier.keplr.app",
          "https://api-sommelier.pupmos.network",
          "https://sommelier-api.polkachu.com",
      ],
      rpcs: [
          "http://localhost:17783",
          "https://rpc-sommelier.keplr.app",
          "https://rpc-sommelier.pupmos.network",
          "https://sommelier-rpc.polkachu.com",
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "persistence",
      chain_id: "core-1",
      url: "https://rest.core.persistence.one/",
      hosts: [
          "https://rest.core.persistence.one/",
      ],
      rpcs: [
          "https://rpc.core.persistence.one",
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  },
  {
      id: "sei-testnet",
      chain_id: "atlantic-2",
      url: "https://sei-testnet-lcd.orbitalcommand.io",
      hosts: [
          'https://sei-testnet-lcd.orbitalcommand.io',
          'https://sei-testnet-rpc.allthatnode.com:1317',
          'https://rest-sei-test.ecostake.com',
          'https://sei-testnet-api.polkachu.com',
          'https://sei-testnet.api.kjnodes.com'
      ],
      rpcs: [
          'https://sei-testnet.nodejumper.io',
          'https://rpc-sei-test.ecostake.com',
          'https://sei-testnet-rpc.polkachu.com',
          'https://sei-testnet.rpc.kjnodes.com',
          'https://sei-testnet-rpc.orbitalcommand.io'
      ],
      emission_api: "annual_provisions",
      endpoints: { }
  }
]

export function getIBCChannel(from, to) {
    let res = getSuccessResponse()

    let channel = IBC_CHANNELS[from][to] 

    if(channel) {
        res.data = channel
    }
    else {
        res = getErrorResponse('error_ibc_channel_not_found', {from,to})
    }

    return res
}

export const standardEndpoints = {
    status: '/status',
    bank_supply: "/cosmos/bank/v1beta1/supply",
    bank_balances: "/cosmos/bank/v1beta1/balances",
    inflation_params: "/cosmos/inflation/v1/params",
    epoch_mint_provision: "/cosmos/inflation/v1/epoch_mint_provision",
    staking_pool: "/cosmos/staking/v1beta1/pool",
    annual_provisions: "/cosmos/mint/v1beta1/annual_provisions",
    block: "/cosmos/tx/v1beta1/txs/block",
    blocks: "/cosmos/base/tendermint/v1beta1/blocks",
    txs: "/cosmos/tx/v1beta1/txs",
    gov_proposals: "/cosmos/gov/v1beta1/proposals",
    denom_traces: "/ibc/apps/transfer/v1/denom_traces",
    ibc_transfer_port: "transfer"
}

export function getRPCInfo(key, value, field) {
    const record = rpcInfo.find(x => x[key] === value)
    return record?.[field]
}

export function getEndpoint(key, value, endpointId) {
    const endpointOverrides = getRPCInfo(key, value, 'endpoints')

    let endpoint = standardEndpoints[endpointId]

    if(Object.keys(endpointOverrides)) {
        if(endpointOverrides[endpointId]) {
            endpoint = endpointOverrides[endpointId]
        }
    }

    return endpoint
}

export function getRevisionNumber(id) {
    const chainId = getRPCInfo('id', id, 'chain_id')
    const chainIdParts = chainId.split('-')
    let revisionNumber = parseFloat(chainIdParts[chainIdParts.length - 1])
    return revisionNumber
}

export default rpcInfo
