
export function CarsIndex(props) {
    return (
        <div>
            <h1>All Vroomz</h1>
            {props.cars.map((car) => (
                <div key={car.id}>
                    <h1>{car.year} {car.make} {car.model}</h1>
                    <img src={car.image_url} />
                    <h2><strong>Description: </strong></h2>
                    <p>Color: {car.color}</p>
                    <p>Seats: {car.seats}</p>
                    <p>Transmission: {car.transmission}</p>
                    <p>Rate: {car.rate}</p>
                    <button onClick={() => props.onShowCar(car)}>More Info</button>
                </div>
            ))}
        </div>
    )
}