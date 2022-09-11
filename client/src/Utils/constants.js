
export const polygonTestnet = {
  id: 80001,
  name: "Polygon Testnet",
  network: "Polygon Mumbai",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Matic",
    symbol: "MATIC",
  },
  rpcUrls: {
    default: "https://matic-mumbai.chainstacklabs.com",
  },
  blockExplorers: {
    default: {
      name: "Skalenodes",
      url: "https://mumbai.polygonscan.com/",
    },
  },
  testnet: true,
};

// export const sChainTokenInfo = {
//   name: "Razor Network",
//   address: RAZOR_SCHAIN_ADDRESS,
//   symbol: "RAZOR",
//   decimals: 18,
//   image: "https://s2.coinmarketcap.com/static/img/coins/64x64/8409.png",
// };