function PastTrips() {
    return (
        <div class="screenMargin">
            <div class="screenTitle">Past Trips</div>
            <div class="pastCard">
                <div class="pastGrid">
                    <div class="pastHeader">
                        <div className="col-span-5">
                            <span class="ml-1">
                                18:30⠀
                            </span>
                            <span>
                                07/15/2022⠀
                            </span>
                            <span>
                            @ Querétaro City
                            </span>
                        </div>
                        
                        <div className="text-center hover:text-rival-500 hover:cursor-pointer">
                            see Tx
                        </div>
                    </div>
                    <div className="pastTime">00:05:15</div>
                    <div class="pl-2 pastPlace">
                        <div className="text-xl">From:</div>
                        <img class="PCAsset2"src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/0-Public-Park.png"/>
                        <span>Santa Mónica Public Park</span>
                        <div className="placeAssets">
                            <div className="text-ride-900">20⚡<span className="text-ride-500 font-bold">-10⚡</span></div>
                            <div className="">now 10⚡</div>
                        </div>
                    </div>
                    <div class="text-center py-5 pt-28 xl:pt-20">
                        →
                    </div>
                    <div class="pastPlace">
                        <div className="text-xl">To:</div>
                        <img class="PCAsset2"src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/14-Goverment%20office.png"/>
                        <span>FCP Goverment Office</span>
                        <div className="placeAssets">
                            <div className="text-ride-900">5⚡<span className="text-rider-100 font-bold">+10⚡</span></div>
                            <div className="">now 15⚡</div>
                        </div>
                    </div>
                    <div className="pastRider">
                        <div class="riderAddress">
                            <span>Rider: 0x04cc6b487566B1C821bEa04d7ac0d23CEDe05cC9</span>
                        </div>
                        <div class="riderReward">
                            +5⚡
                        </div>
                    </div>
                </div>
            </div>            
            
        </div>
    )
}
export default PastTrips;