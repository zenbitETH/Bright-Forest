import Map from "../Components/GoogleMap";
import Hud from "../Components/Hud";
import tripData from '../Data/trips.json'
import { useState } from 'react';
import DetectTrip from "../Components/TripFlow/DetectTrip";
import StartTrip from "../Components/TripFlow/StartTrip";
import ActiveTrip from "../Components/TripFlow/ActiveTrip";
import EndTrip from "../Components/TripFlow/EndTrip";

import { useParams } from "react-router-dom";


const Trip = () => {
  const { id } = useParams();
  const data = tripData.filter((item) => (item.id.toString() === id)) // has to be == since id is a string, this is a simplified implementation anyway
  const projectData = data[0]

  return (
    <div className="font-bf text-center">
      <Map data={projectData}/>
      {/* <DetectTrip data={projectData} /> */}
      <EndTrip data={projectData} />
    </div>
  );
};
export default Trip;
