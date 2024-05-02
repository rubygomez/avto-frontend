export function BookingsIndex(props) {
    return (
        <div>
            {/* <h1>All Bookings</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {props.bookings.map((bookings) => (
                    <div key={bookings.id} className="col">
                        <div className="card">
                            const car = props.cars.find(car => car.id === booking.car_id);
                            <img src={car ? car.image_url : ''} className="card-img-top" alt="Car" />
                            <div className="card-body">
                                <h5 className="card-title">Booking ID: {booking.id}</h5>
                                <p className="card-text">Start Date: {booking.book_start}</p>
                                <p className="card-text">End Date: {booking.book_end}</p>
                                <p className="card-text">Total Proce: {booking.total_price}</p>
                                <button onClick={() => props.onShowBooking(booking)}>More INfo</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}



            <h1>All Bookings</h1>
            <div className="row row-cols-1 row-cold-md-3 g-4"></div>
                {props.bookings.map((booking) => (
                    <div key={booking.id}>
                        <h2>{booking.car_id}</h2>
                        <h1>{booking.book_start}</h1>
                        <h1>{booking.book_end}</h1>
                        <h1>{booking.total_price}</h1>
                        <button onClick={() => props.onShowBooking(booking)}>More Info</button>
                    </div>
            ))}
        </div>
    );
}