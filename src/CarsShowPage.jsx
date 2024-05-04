import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function CarsShowPage() {
    const [car, setCar] = useState({});
    const params = useParams();

    const handleShowCar = () => {
        axios.get(`http://localhost:3000/cars/${params.id}.json`).then((response) => {
            setCar(response.data);
        });
    };

    useEffect(handleShowCar, []);

    return (
        <div id="cars-show">
            <h2>{car.year} {car.make} {car.model} information</h2>
            <img src={car.image_url} />
            <p>color: {car.color}</p>
            <p>Seats: {car.seats}</p>
            <p>Transmission: {car.transmission}</p>
        </div>

    );
}
