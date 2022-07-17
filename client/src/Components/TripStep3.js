import Map from '../components/GoogleMap'

function TripStep3() {
    return (
    <div>
        <Map/>
        <div class="step3">
            <div class="col-span-3 m-1">Now complete the trip</div>
            <div class="text-left col-span-2 text-2xl my-4 ml-5 ">
                <div>Public Park</div>
                <span> Santa Mónica</span>
                <div class="text-lg">in Querétaro City</div>
            </div>
            <img alt="Origin 3d asset" class="w-3/4"src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/0-Public-Park.png"/>
            <div class="tripArrow col-span-3">↓<span class="text-transparent xl:text-white">→</span></div>
            <div class="text-left col-span-2 text-2xl my-4 ml-5 ">
                <div>University</div>
                <span> UAQ</span>
                <div class="text-lg">in Querétaro City</div>
            </div>
            <img alt="Origin 3d asset" class="w-3/4"src="https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/12-University.png"/>
        </div>
    </div>
    )
}
export default TripStep3;