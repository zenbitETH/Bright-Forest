import Map from "./GoogleMap";
function Hud() {
    return (
        <div>
            {/*
            <div class="topHud">
                <div class="hudWallet">Connect</div>
            </div> 
            */}
            <div class="topHud">
                <div class="hudRider">0xdA7d...da9B6</div>{/*Data from the adress or Rider if there is Rider profiles*/}
                <div class="hudEnergy">1,700⚡</div>{/*Energy Units from Punk Cities*/}
            </div>
            <div class="bottomHud">
              <div class="hudLeader">
                {" "}
                <button
                  onClick={() =>
                    window.location.assign("/leaderboard")
                  }
                >
                  Leaderboard
                </button>
              </div>
              {/*All riders Leaderboard*/}
              <div class="hudTrips">
                  <button
                  onClick={() =>
                    window.location.assign("/pasttrips")
                  }
                >
                Past/Current Trips{" "}
                </button>
                </div>
              {/*Switch between current and past Trips*/}
            </div>
         
        </div>
    )

}

export default Hud;