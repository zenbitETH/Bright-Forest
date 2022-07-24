import {BrowserRouter , Routes, Route} from"react-router-dom";
import Hud from './Components/Hud'
import Map from './Components/GoogleMap'
import Trip from './Screens/Trip'
import ATrips from './Screens/AvaliableTrips'
import PTrips from './Screens/PastTrips'
import TripOne from './Components/TripStep1'
import TripTwo from './Components/TripStep2'
import TripThree from './Components/TripStep3'
import TripFour from './Components/TripStep4'


function App() {
  return (
    <div class="App">
      <Hud />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Trip />} />
          <Route path="/trip1" element={<TripOne/>} />
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
