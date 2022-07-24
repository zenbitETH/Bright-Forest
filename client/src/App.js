import {BrowserRouter , Routes, Route} from"react-router-dom";
import Hud from './Components/Hud';
import Home from "./Screens/Home";
import AvailableTrips from './Screens/AvaliableTrips'
import Trip from './Screens/Trip'
import PastTrips from './Screens/PastTrips'
import Leaderboard from "./Screens/Leaderboard";
import TripOne from './Components/TripStep1'
import TripTwo from './Components/TripStep2'
import TripThree from './Components/TripStep3'
import TripFour from './Components/TripStep4'

import Map from './Components/GoogleMap'

function App() {
  return (
    <div class="App">
      <Hud />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AvailableTrips />} />
          <Route path="/trip2" element={<TripTwo />} />
          <Route path="/trip3" element={<TripThree />} />
          <Route path="/trip4" element={<TripFour />} />
          <Route path="/pasttrips" element={<PastTrips />} />
          <Route path="/maponly" element={<Map/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
          <Route path="/trip" element={<Trip/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
