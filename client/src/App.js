import {BrowserRouter , Routes, Route} from"react-router-dom";
import Hud from './Components/Hud';
//import ATrips from './Screens/AvaliableTrips'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hud />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
