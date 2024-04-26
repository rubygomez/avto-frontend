export function BookingsIndex(props) {
    return (
        <div>
            <h1>All Bookings</h1>
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