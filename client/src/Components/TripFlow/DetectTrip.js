import Map from '../GoogleMap'


const DetectTrip = ({data}) => {
    return (
        <div>
            <Map />
            <div class="detectTrip">
                <div class="col-span-3 text-white m-1">Go here to start the trip:</div>
                <div class="text-left text-white col-span-2 text-3xl my-4 ml-5 ">
                    <div>{data.details.from.typeOfPlace}</div>
                    <span>{data.details.from.name}</span>
                    <div class="text-lg">in {data.details.city} City</div>
                </div>
                <img alt="Origin 3d asset" class="w-3/4"src={data.details.from.img}/>
            </div>
            <img alt="Origin 3d asset" class="stepIMG" src={data.details.from.img}/>
            
        </div>
    )
}
export default DetectTrip;