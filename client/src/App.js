import { Center, Flex, Heading } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Image } from "@chakra-ui/react";
import Theme from "./Components/Theme";

import Map from './Components/GoogleMap'

import React, { useContext, useEffect, useState } from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// import routes from "./routes";

import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import AvailableTrips from "./pages/AvaliableTrips";
import PastTrips from "./pages/PastTrips";
import Leaderboard from "./pages/Leaderboard";
import Trip from "./pages/Trip";
import DetectTrip from "./Components/TripFlow/DetectTrip";
import StartTrip from "./Components/TripFlow/StartTrip";
import ActiveTrip from "./Components/TripFlow/ActiveTrip";
import EndTrip from "./Components/TripFlow/EndTrip";
import About from "./pages/About";
import "./App.css"

const App = () => {
  // const mainContent = React.useRef(null);
  // const location = useLocation();
  // const [isActive, setIsActive] = React.useState(status);
  // const [address, setAddress] = React.useState(account);
  // const [isConnectingMetaMask, setIsConnectingMetaMask] = useState(false);
  // const [walletConnector, setWalletConnector] = useState(connector);
  // const [walletError, setWalletError] = useState(error);
  // const [connectedChainId, setConnectedChainId] = useState(chainId);

  // useEffect(() => {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   mainContent.current.scrollTop = 0;
  // }, [location]);

  // useEffect(() => {
  //   setAddress(account);
  //   setIsActive(active);
  //   setWalletConnector(connector);
  //   setWalletError(error);
  //   setConnectedChainId(chainId);
  // }, [account, connector, error, chainId]);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <div className="App">
          <Flex justifyContent="flex-end" m={4}>
            <Theme />
            <ConnectButton />
          </Flex>
          <Routes>
            <Route path="/" element={<AvailableTrips />} />
            <Route path="/home" element={<Home />} />
            <Route path="/trip1" element={<DetectTrip />} />
            <Route path="/trip2" element={<StartTrip />} />
            <Route path="/trip3" element={<ActiveTrip />} />
            <Route path="/trip4" element={<EndTrip />} />
            <Route path="/pasttrips" element={<PastTrips />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route 
              path="/trip/:id" 
              element={<Trip />}
            />
            <Route path="/about" element={<About />} />
            </Routes>
          {/* <Center>
            <Heading>Bright Forest</Heading>
          </Center> */}
        </div>
      </AnimatePresence>
    </>
  );
};

export default App;
