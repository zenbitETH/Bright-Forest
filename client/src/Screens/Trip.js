import Map from '../Components/GoogleMap'
import Hud from '../Components/Hud'
import Step1 from '../Components/TripStep1'
import Step2 from '../Components/TripStep2'
import Step3 from '../Components/TripStep3'
import Step4 from '../Components/TripStep4'


function Trip() {
    return (
    <div className='font-bf text-center'>
        <Map/>
        <Step4/>
    </div>
    )
}
export default Trip;