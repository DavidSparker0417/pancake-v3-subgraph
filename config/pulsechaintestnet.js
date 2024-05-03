/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "bsc",
  wNativeAddress: "0x70499adEBB11Efd915E3b69E700c331778628707",
  v3: {
    // WBNB-USDT 500
    wNativeStablePoolAddress: "0x6ea706fde23f4d1c42f3c31de71066fc3e158a53",
    stableIsToken0: true,
    factoryAddress: "0x3c5B361C9cAC76C7b1bCaaEd036fbF67B90B6BF1",
    startBlock: 	18904378,
    stableCoins: [
      "0x12Ab8B560FAFe099e1CCc836cbbc2286EDe7905f", // USDC
    ],
    whitelistAddresses: [
      "0x70499adEBB11Efd915E3b69E700c331778628707", // WPLS
      "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT
      "0x12Ab8B560FAFe099e1CCc836cbbc2286EDe7905f", // USDC
    ],
    nonfungiblePositionManagerAddress: "0x07562A51d3863575fE909656737e56B7614e69c4",
    nonfungiblePositionManagerStartBlock: 18904679,
    minETHLocked: 10,
  },
  masterChefV3: {
    masterChefAddress: "0xcf10c31B54386bB2d203C568D345D949109E99A9",
    startBlock: 18907344,
  },
  predictionV2: {
    startBlock: 10333825,
    address: "0x18B2A687610328590Bc8F2e5fEdDe3b582A49cdA",
  },
};
