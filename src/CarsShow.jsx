import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export function CarsShow(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleBookNow = () => {
        setModalOpen(true);
        props.onClose();
    };

    const handleConfirmBooking = () => {
        setModalOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onCreateBooking(params, () => event.target.reset());
    };

    return (
        <div>
            <h1>Car Info</h1>
            <h3>{props.car.year} {props.car.make} {props.car.model}</h3>
            <img src={props.car.image_url} />
            <p>Color: {props.car.color}</p>
            <p>Seats: {props.car.seats}</p>
            <p>Transmission: {props.car.transmission}</p>
            <h4>Rate: {props.car.rate}</h4>
            <button onClick={handleBookNow}>Book Now!!!!</button>
            <Modal show={modalOpen}>
                <div>
                    <h2>Confirm Booking</h2>
                    <button onClick={handleConfirmBooking}>Booking</button>
                    <button onClick={() => setModalOpen(false)}>Cancel</button>
                </div>
            </Modal>
        </div>
    );
}