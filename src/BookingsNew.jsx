export function BookingsNew(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onCreateBooking(params, () => event.target.reset());
    };
    return (
        <div>
            <h1>New Booking</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    Car: <input name="car_id" type="integer" />
                </div>
                {/* <div>
                    User: <input name="user_id" type="integer" />
                </div> */}
                <div>
                    Start Date: <input name="book_start" type="date" />
                </div>
                <div>
                    End Date: <input name="book_end" type="date" />
                </div>
                {/* <p>Total: {bookings.total_price}</p> */}
                <button type="submit">Create Booking</button>
            </form>
        </div>
    );
}