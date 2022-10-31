import Map from "../Components/GoogleMap";
import Hud from "../Components/Hud";
import Step1 from "../Components/TripStep1";
import Step2 from "../Components/TripStep2";
import Step3 from "../Components/TripStep3";
import Step4 from "../Components/TripStep4";
import { useParams } from "react-router-dom";

const Trip = () => {
  const { id } = useParams();
  return (
    <div className="font-bf text-center">
      <Map id={id}/>
      <Step4 id={id}/>
    </div>
  );
};
export default Trip;
