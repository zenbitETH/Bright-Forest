import data from '../Data/trips.json';
import { useNavigate } from 'react-router-dom';

const AvailableTrips = () => {
  const navigate = useNavigate()

  const handleClick = async (id) => {
    navigate(`/trip/${id}`);
  }

  return (
    <div class="screenMargin grid gap-3">
      <div class="screenTitle">Available Trips</div>

      {data.map((trip, index) => (
        <div key={index} class="tripCard">
          <div class="text-2xl pt-2">Trip #{index+1}</div>
          <div class="tripData">
            <div class="tripFrom">
              <div class="dataValue">
                <div class="dataTitle">From:</div>
                <span class="nameofPlace"> {trip.details.from.name}</span>
                <span class="typeofPlace">{trip.details.from.typeOfPlace}</span>
                <div class=""> -{trip.details.from.points}⚡</div>
              </div>
              {/*Type of place and Name from Punk Cities NFT metadata */}
              <img
              class="PCAsset"
              src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/0-Public-Park.png"
            />
            </div>
            <div class="tripArrow">↓</div>
              <div class="tripTo">
                <div class="dataValue">
                  <div class="dataTitle">To:</div>
                  <span class="nameofPlace2"> {trip.details.to.name}</span>
                  <span class="typeofPlace2">{trip.details.to.typeOfPlace}</span>
                  <div class=""> +{trip.details.to.points}⚡</div>
                </div>
                {/*Type of place and Name from Punk Cities NFT metadata */}
                <img
                  class="PCAsset"
                  src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/14-Goverment%20office.png"
                />
              </div>
          </div>
            <div class="grid xl:grid-cols-2 text-ride-100 rounded-lg">
            <div class="tripDetails">
              <div class="bg-ride-900 font-bold xl:rounded-tl-lg ">
                <div class="dataValue xl:text-xl">
                  <div class="dataTitle xl:text-lg">Distance</div>
                  {trip.details.distance}
                </div>
              </div>

              <div class="font-bold bg-ride-900 xl:rounded-tr-lg">
                <div class="dataValue xl:text-xl">
                  <div class="dataTitle xl:text-lg">City:</div>
                  {trip.details.city}
                </div>
              </div>
              <div class="bg-rival-500  font-bold rounded-tr-lg xl:rounded-bl-lg">
                <div class="dataValue xl:text-xl">
                  <div class="dataTitle xl:text-lg">Best time:</div>
                  {trip.details.record}
                </div>
              </div>

              <div class="font-bold bg-rider-500 text-ride-100 rounded-tl-lg xl:rounded-br-lg">
                <div class="dataValue xl:text-xl">
                  <div class="dataTitle xl:text-lg">Reward:</div>
                  {trip.details.reward}⚡
                </div>
              </div>
            </div>
            <div class="mx-20 mt-10 xl:my-auto">
              <div class="Button" onClick={() => {handleClick(trip.id)}}>Start trip</div>
            </div>
          </div>
        </div>
        )
      )}
    </div>
  );
};
export default AvailableTrips;
