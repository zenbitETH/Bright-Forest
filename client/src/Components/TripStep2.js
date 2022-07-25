import Map from './GoogleMap';
import * as timer from "../Scripts/timer";

function TripStep2() {
    
    function startTrip() {
        timer.startTimer();

    }
//    const x =  setInterval(() => {
//         document.getElementById("timer").innerHTML = timer.formatTimer()
//    }, 100)
    return (
    <div>-
        <div class="step2">
            <div class="col-span-3 m-1">Now you are in:</div>
            <div class="text-left col-span-2 text-2xl my-4 ml-5 ">
                <div>Public Park</div>
                <span> Santa Mónica</span>
                <div class="text-lg">in Querétaro City</div>
                <button onClick={startTrip}>Start trip</button>
            </div>
            <img alt="Origin 3d asset" class="stepIMG"src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/0-Public-Park.png"/>
            <div class="col-span-3 m-1">Press to start the trip</div>
            
        </div>
    </div>
    )
}
export default TripStep2;