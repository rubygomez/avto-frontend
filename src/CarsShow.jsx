
export function CarsShow(props) {
    return (
        <div>
            <h1>Car Info</h1>
            <h3>{props.car.year} {props.car.make} {props.car.model}</h3>
            <p> img: {props.car.image_url} </p>
            <p>Color: {props.car.color}</p>
            <p>Seats: {props.car.seats}</p>
            <p>Transmission: {props.car.transmission}</p>
            <h4>Rate: {props.car.rate}</h4>
        </div>
    )
}