import {BrowserRouter , Routes, Route} from"react-router-dom";
import Hud from './Components/Hud';
import Home from "./Screens/Home";
//import ATrips from './Screens/AvaliableTrips'
import PTrips from './Screens/PastTrips'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
