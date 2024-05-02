import  React, { useState, useEffect } from "react";
import axios from "axios";

export function CarsIndex(props) {
    return (
        <div>
            <h1>All Vroomz</h1>
            <div className="row row-cols-1 row-cols-md-2">
                {props.cars.map((car) => (
                    <div key={car.id} className="col mb-">
                        <div className="card" style={{ maxWidth: "540px"}}>
                            <div className="row g-0">
                                <div style={{ maxHeight: "200px", width: "100%"}}>  
                                    <img src={car.image_url} className="img-fluid rounded-start" alt={`${car.year} ${car.make} ${car.model}`} style={{ width:"100%", height: "200px", objectFit:"cover" }} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{car.year} {car.make} {car.model}</h5>
                                        <p className="card-text"><strong>Description:</strong></p>
                                        <p className="card-text">Color: {car.color}</p>
                                        <p className="card-text">Seats: {car.seats}</p>
                                        <p className="card-text">Transmission: {car.transmission}</p>
                                        <p className="card-text">Rate: {car.rate}</p>
                                        <button onClick={() => props.onShowCar(car)}>More Info</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}