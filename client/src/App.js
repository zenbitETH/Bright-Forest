import {BrowserRouter , Routes, Route} from"react-router-dom";
import Hud from './Components/Hud'
import Map from './Components/GoogleMap'
import Trip from './Screens/Trip'
import ATrips from './Screens/AvaliableTrips'
import PTrips from './Screens/PastTrips'


function App() {
  return (
    <div class="App">
      <Hud />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Trip />} />
          <Route path="/availabletrips" element={<ATrips />} />
          <Route path="/pasttrips" element={<PTrips />} />
          <Route path="/maponly" element={<Map/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
