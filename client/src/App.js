import {BrowserRouter , Routes, Route} from"react-router-dom";
import Hud from './Components/Hud';
import Home from "./Screens/Home";
import AvailableTrips from './Screens/AvaliableTrips'
import Trip from './Screens/Trip'
import PastTrips from './Screens/PastTrips'


function App() {
  return (
    <div className="App">
    <Hud/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PastTrips />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
