import {BrowserRouter , Routes, Route} from"react-router-dom";
import Hud from './Components/Hud';
import Home from "./Screens/Home";
import AvailableTrips from './Screens/AvaliableTrips'
import Trip from './Screens/Trip'
import PastTrips from './Screens/PastTrips'
import Leaderboard from "./Screens/Leaderboard";


function App() {
  return (
    <div class="App">
      <Hud />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TripOne />} />
          <Route path="/trip2" element={<TripTwo />} />
          <Route path="/trip3" element={<TripThree />} />
          <Route path="/trip4" element={<TripFour />} />
          <Route path="/availabletrips" element={<ATrips />} />
          <Route path="/pasttrips" element={<PTrips />} />
          <Route path="/maponly" element={<Map/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
