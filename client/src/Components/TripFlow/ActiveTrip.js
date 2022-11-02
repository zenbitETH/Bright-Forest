
const ActiveTrip = ({ data }) => {
    return (
    <div>
        <div class="activeTrip">
            <div class="col-span-4 m-1">Now complete the trip</div>
            <div class="text-left col-span-3 text-2xl my-4 ml-5 ">
                <span>{data.details.from.name}</span>
                <div>{data.details.from.typeOfPlace}</div>
                <div class="text-lg">in {data.details.city}</div>
            </div>
            <img alt="Origin 3d asset" class="stepIMG " src={data.details.from.img}/>

            <div class="tripArrow ">↓</div>
            <div class="text-left col-span-3 text-2xl my-4 ml-5 ">
                <span>{data.details.from.name}</span>
                <div>{data.details.to.typeOfPlace}</div>
                <div class="text-lg">in {data.details.city}</div>
            </div>
            <img alt="Origin 3d asset" class="stepIMG "src={data.details.to.img}/>
        </div>
    </div>
    )
}
export default ActiveTrip;