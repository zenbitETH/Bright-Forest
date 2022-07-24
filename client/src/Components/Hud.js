import Map from "./GoogleMap";
function Hud() {
  console.log(window.location);
  return (
    <div>
      {/*<div class="topHud">
                <div class="hudWallet">Connect</div>
            </div> */}

      <div class="topHud">
        <div class="hudRider">Address/Rider</div>
        {/*Data from the adress or Rider if there is Rider profiles*/}
        <div class="hudEnergy">5⚡</div>
        {/*Energy Units from Punk Cities*/}
        <div class="hudPOAPs">2 🏅</div>
        {/*Bright Forest POAPs*/}
      </div>

      <div class="bottomHud">
        <div class="hudLeader">
          {" "}
          <button
            onClick={() =>
              window.location.assign("http://localhost:3000/leaderboard")
            }
          >
            Leaderboard
          </button>
        </div>
        {/*All riders Leaderboard*/}
        <div class="hudTrips">
            <button
            onClick={() =>
              window.location.assign("http://localhost:3000/pasttrips")
            }
          >
          Past/Current Trips{" "}
          </button>
          </div>
        {/*Switch between current and past Trips*/}
      </div>
    </div>
  );
}

export default Hud;
