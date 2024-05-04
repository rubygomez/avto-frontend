import React from "react";
export function BookingsIndex(props) {
    function formatDate(dateString) {
        const date = new Date(dateString);
        const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear().toString().slice(-2)}`;
        return formattedDate;
    }
    return (
        <div>
            <h1>All Bookings</h1>
            {/* <p>Total: {props.totalCost}</p> */}
            <div className="row row-cols-1 row-cold-md-3 g-4">
                {props.bookings.map((booking) => (
                    <div key={booking.id} className="col mb-4">
                        <div className="card" style={{ width: "18rem"}}>
                            <div className="card-body">
                                <h3 className="card-title">{booking.car.year} {booking.car.make} {booking.car.model}</h3>
                                <h4 className="card-subtitle mb-2 text-muted">put car name here{booking.car_id}</h4>
                                <p className="card-text">{formatDate(booking.book_start)} - {formatDate(booking.book_end)}</p>
                                {/* <h1 className="card-text">{props.totalCost}</h1> */}
                                <button>cancel booking</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}