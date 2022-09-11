const PastTrips = () => {
  return (
    <div class="screenMargin">
      <div class="screenTitle">Past Trips</div>
      <div class="pastCard">
        <div class="pastGrid">
          <div class="pastHeader">
            <div className="col-span-5">
              <span class="ml-1">11:49⠀</span>
              <span>07/24/2022⠀</span>
              <span>@ Querétaro City</span>
            </div>

            <div className="text-center hover:text-rival-500 hover:cursor-pointer">
              see Tx
            </div>
          </div>
          <div className="pastTime">00:05:15</div>
          <div class="pl-2 pastPlace">
            <div className="text-xl">From:</div>
            <img
              class="PCAsset2"
              src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/0-Public-Park.png"
            />
            <span>Santa Mónica Public Park</span>
            <div className="placeAssets">
              <div className="text-ride-900">
                20⚡<span className="text-ride-500 font-bold">-10⚡</span>
              </div>
              <div className="">now 10⚡</div>
            </div>
          </div>
          <div class="text-center py-5 pt-28 xl:pt-20">→</div>
          <div class="pastPlace">
            <div className="text-xl">To:</div>
            <img
              class="PCAsset2"
              src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/14-Goverment%20office.png"
            />
            <span>Delegación Felipe Carrillo Puerto</span>
            <div className="placeAssets">
              <div className="text-ride-900">
                5⚡<span className="text-rider-100 font-bold">+10⚡</span>
              </div>
              <div className="">now 15⚡</div>
            </div>
          </div>
          <div className="pastRider">
            <div class="riderAddress">
              <span>Rider: 0xdA7773E91a396d592AD33146164dA6d7d2Fda9B6</span>
            </div>
            <div class="riderReward">+1700⚡</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PastTrips;
