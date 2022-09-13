import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig, chain } from "wagmi";
import { polygonTestnet } from "./utils/constants";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import "./index.css";

import App from "./App";
// Rainbow kit styles
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultProvider } from "ethers";

const { chains } = configureChains(
  [polygonTestnet, chain.polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== polygonTestnet.id) return null;
        return {
          http: "https://matic-mumbai.chainstacklabs.com",
        };
      },
    }),
    publicProvider(),
  ],
  { pollingInterval: 10_000 }
);

const { connectors } = getDefaultWallets({
  appName: "Bright Forest",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider: getDefaultProvider(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  </React.StrictMode>
);
