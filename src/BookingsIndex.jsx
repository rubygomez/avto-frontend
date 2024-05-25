import React, { useEffect, useState } from "react";
import axios from "axios";
import { ConfirmMsg } from "./ConfirmMsg";

export function BookingsIndex(props) {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedBookingId, setSelectedBookingId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:3000/bookings.json").then((response) => {
            props.setBookings(response.data);
            setLoading(false);
        }).catch((error) => {
            console.error("Error fetching bookings:", error);
            setLoading(false);
        });
    }, []);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const formattedDate = `${(date.getUTCMonth() + 1).toString().padStart(2, '0')}/${date.getUTCDate().toString().padStart(2, '0')}/${date.getUTCFullYear().toString().slice(-2)}`;
        return formattedDate;
    }

    const handleCancelBooking = (id) => {
        setSelectedBookingId(id);
        setShowConfirmation(true);
    };

    const confirmCancelBooking = () => {
        axios.delete(`http://localhost:3000/bookings/${selectedBookingId}.json`).then(() => {
            const updatedBookings = props.bookings.filter(booking => booking.id !== selectedBookingId);
            props.setBookings(updatedBookings);
        }).catch((error) => {
            console.error("Error deleting bookingg:", error);
        }).finally(() => {
            setShowConfirmation(false);
        });
    };

    const cancelCancelBooking = () => {
        setShowConfirmation(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>All Bookings</h1>
            <div className="row row-cols-1 row-cold-md-3 g-4">
                {props.bookings.map((booking) => (
                    <div key={booking.id} className="col mb-4">
                        <div className="card mb-3" style={{ maxWidth: "100%", width: "600px", height: "175px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img 
                                    src={booking.car.image_url} 
                                    className="img-fluid rounded-start" 
                                    alt="car-image" 
                                    style={{ width: "100%", height: "170px"}} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body" style={{paddingBottom: "-30px"}}>
                                        {booking.car && 
                                            <>
                                                <h3 className="card-title">{booking.car.year} {booking.car.make} {booking.car.model}</h3>
                                                <h4>Total: </h4>
                                            </>
                                        }
                                        <p className="card-text">{formatDate(booking.book_start)} to {formatDate(booking.book_end)}</p>
                                        <button onClick={() => handleCancelBooking(booking.id)}>cancel booking</button>
                                        {showConfirmation && (
                                            <ConfirmMsg 
                                            message="Are you sure you want to cancel this booking?"
                                            onConfirm={confirmCancelBooking}
                                            onCancel={cancelCancelBooking} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}