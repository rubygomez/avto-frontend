export function BookingsShow(props) {
    return (
        <div>
            <h1>Booking Info</h1>
            <p>Car Id: {props.booking.car_id}</p>
            <p>Start Date: {props.booking.book_start}</p>
            <p>End Date: {props.booking.book_end}</p>
            <p>Total: {props.booking.total_price}</p>
        </div>
    );
}