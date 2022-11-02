const StartTrip = ({data}) => {
    
    return (
    <div>
        <div class="startTrip">
            <div class="col-span-3 m-1">Now you are in:</div>
            <div class="text-left col-span-2 text-2xl my-4 ml-5 ">
                <div>{data.details.from.typeOfPlace}</div>
                <span>{data.details.from.name}</span>
                <div class="text-lg">in {data.details.city} City</div>
                <button onClick={""}>Start trip</button>
            </div>
            <img alt="Origin 3d asset" class="stepIMG"src={data.details.from.img}/>
            <div class="col-span-3 m-1">Press to start the trip</div>
            
        </div>
    </div>
    )
}
export default StartTrip;