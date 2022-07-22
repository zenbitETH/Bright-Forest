import Map from "./GoogleMap";
function Hud() {
    return (
        <div class="App">
            <div class="topHud">
                <div class="hudRider">Address/Rider</div>{/*Data from the adress or Rider if there is Rider profiles*/}
                <div class="hudEnergy">5⚡</div> {/*Energy Units from Punk Cities*/}
                <div class="hudPOAPs">2 🏅</div>{/*Bright Forest POAPs*/}
            </div>  
            <Map />
            <div class="bottomHud">
                <div class="hudLeader">Leaderboard</div>{/*All riders Leaderboard*/}
                <div class="hudTrips">Past/Current Trips</div> {/*Switch between current and past Trips*/}
            </div>    
        </div>
    )

}

export default Hud;