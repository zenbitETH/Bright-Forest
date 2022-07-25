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
                <a href="/" class="hudRider"><div >0xdA7d...da9B6</div>{/*Data from the adress or Rider if there is Rider profiles*/}</a>
                <a href="/"><div class="hudEnergy">1,700⚡</div>{/*Energy Units from Punk Cities*/}</a>
            </div>
            <div class="bottomHud">
            <a href="/Leaderboard">
              <div class="hudLeader">
                  Leaderboard           
              </div>
            </a>
              {/*All riders Leaderboard*/}
              <a href="/PastTrips">
                <div class="hudTrips">
                Past/Current Trips
                </div>
              </a>
              {/*Switch between current and past Trips*/}
            </div>
         
        </div>
    )

}

export default Hud;