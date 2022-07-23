import {BrowserRouter , Routes, Route} from"react-router-dom";
import Hud from './Components/Hud';
import Home from "./Screens/Home";
//import ATrips from './Screens/AvaliableTrips'
import Trip from './Screens/Trip'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Trip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
