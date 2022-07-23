import {BrowserRouter , Routes, Route} from"react-router-dom";
import Hud from './Components/Hud';
import Home from "./Screens/Home";
import AvailableTrips from './Screens/AvaliableTrips'
import Trip from './Screens/Trip'


function App() {
  return (
    <div className="App">
    <Hud/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AvailableTrips />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
