const EndTrip = ({ data }) => {
    return (
    <div>
        <div class="endTrip">
            <div class="col-span-3 m-1">Now you are in:</div>
            <div class="text-left col-span-2 text-2xl my-4 ml-5 ">
                <div>{data.details.to.name}</div>
                <span>{data.details.to.typeOfPlace}</span>
                <div class="text-lg">in {data.details.to.city} City</div>
            </div>
            <img alt="Origin 3d asset" class="stepIMG" src={data.details.to.img}/>
            <div class="col-span-3 m-1">Press to complete the trip</div>
        </div>
    </div>
    )
}
export default EndTrip;