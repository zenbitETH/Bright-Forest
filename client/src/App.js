import Map from './components/GoogleMap';
import Hud from './components/Hud'
import ATrips from './Screens/AvaliableTrips'


function App() {
  return (
    <div className="App">
      <Hud/>
      <ATrips/>
      <Map/>
    </div>
  );
}

export default App;
