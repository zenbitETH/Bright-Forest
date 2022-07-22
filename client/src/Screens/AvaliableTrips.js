

function AvailableTrips() {
    return (
        <div class="screenMargin">
            <div class="screenTitle">Available Trips</div>
            <div class="tripCard">
                <div class="text-2xl pt-2">Trip #1</div>
                <div class="tripData">
                    <div class="tripFrom">
                        <div class="dataValue">
                            <div class="dataTitle">From:</div>
                            <span class="typeofPlace">Public Park</span>
                            <span class="nameofPlace"> Santa Mónica</span>
                            <div class=""> -10⚡</div>
                        </div>{/*Type of place and Name from Punk Cities NFT metadata */}
                        <img class="PCAsset"src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/0-Public-Park.png"/>
                    </div>
                    <div class="tripArrow">↓<span class="text-transparent xl:text-white">→</span></div>
                    <div class="tripTo">
                        <div class="dataValue">
                            <div class="dataTitle">To:</div>
                            <span class="typeofPlace2">University</span>
                            <span class="nameofPlace2"> UAQ</span>
                            <div class=""> +10⚡</div>
                        </div>{/*Type of place and Name from Punk Cities NFT metadata */}
                        <img class="PCAsset"src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/12-University.png"/>
                    </div>
                </div>
                <div class="grid xl:grid-cols-2 text-ride-100 rounded-lg">
                    <div class="tripDetails">   
                        <div class="bg-ride-900 font-bold xl:rounded-tl-lg ">
                            <div class="dataValue xl:text-xl">
                            <div class="dataTitle xl:text-lg">Distance</div>
                            15km
                            </div>
                        </div>                 
                        
                        <div class="font-bold bg-ride-900 xl:rounded-tr-lg">
                            <div class="dataValue xl:text-xl"><div class="dataTitle xl:text-lg">City:</div>
                            Querétaro</div>                        
                        </div> 
                        <div class="bg-rival-500  font-bold rounded-tr-lg xl:rounded-bl-lg">
                            <div class="dataValue xl:text-xl">
                            <div class="dataTitle xl:text-lg">Best time:</div>
                                00:59:59 {/*Hours:Minutes:Seconds */}
                            </div>
                        </div>                  
                        
                        <div class="font-bold bg-rider-500 text-ride-100 rounded-tl-lg xl:rounded-br-lg">
                            <div class="dataValue xl:text-xl"><div class="dataTitle xl:text-lg">Reward:</div>
                            5⚡</div>                        
                        </div>                     
                    </div>
                    <div class="mx-20 mt-10 xl:my-auto">
                        <div class="Button">Start trip</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AvailableTrips;