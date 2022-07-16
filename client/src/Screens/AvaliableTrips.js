

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
                        </div>{/*Type of place and Name from Punk Cities NFT metadata */}
                        <img class="h-full col-span-2"src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/0-Public-Park.png"/>
                    </div>
                    <div class="text-center text-4xl animate-bounce">↓</div>
                    <div class="tripTo">
                        <div class="dataValue">
                            <div class="dataTitle">To:</div>
                            <span class="typeofPlace2">Universidad</span>
                            <span class="nameofPlace2"> UAQ</span>
                        </div>{/*Type of place and Name from Punk Cities NFT metadata */}
                        <img class="h-full col-span-2"src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/12-University.png"/>
                    </div>
                </div>
                <div>
                    <div class="tripDetails">                    
                        <div class="text-rival-100 font-bold">
                            <div class="dataValue">
                            <div class="dataTitle">Best time:</div>
                                00:59:59 {/*Hours:Minutes:Seconds */}
                            </div>
                        </div>
                        <div class="font-bold">
                            <div class="dataValue"><div class="dataTitle">City:</div>
                            Querétaro</div>                        
                        </div>                    
                    </div>
                    <div class="mx-20 mt-5">
                        <div class="Button">Detalles</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AvailableTrips;