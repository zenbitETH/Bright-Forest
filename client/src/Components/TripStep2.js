import Map from './GoogleMap'

function TripStep2() {
    return (
    <div>
        <Map/>
        <div class="step2">
            <div class="col-span-3 m-1">Now you are in:</div>
            <div class="text-left col-span-2 text-2xl my-4 ml-5 ">
                <div>Public Park</div>
                <span> Santa Mónica</span>
                <div class="text-lg">in Querétaro City</div>
            </div>
            <img alt="Origin 3d asset" class="w-3/4"src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/0-Public-Park.png"/>
            <div class="col-span-3 m-1">Press to start the trip</div>
        </div>
    </div>
    )
}
export default TripStep2;