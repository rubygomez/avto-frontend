
export function CarsIndex(props) {
    return (
        <div>
            <h1>All Vroomz</h1>
            {props.cars.map((car) => (
                <div key={car.id}>
                    <h2>{car.year} {car.make} {car.model}</h2>
                    <img src={car.image_url} />
                    <h1><strong>Description: </strong></h1>
                    <p>Color: {car.color}</p>
                    <p>Seats: {car.seats}</p>
                    <p>Transmission: {car.transmission}</p>
                    <h1>Rate: {car.rate}</h1>
                </div>
            ))}
        </div>
    )
}