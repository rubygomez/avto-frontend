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
                    Car: <input name="car_id" type="text" />
                </div>
                <div>
                    Start Date: <input name="book_start" type="date" />
                </div>
                <div>
                    End Date: <input name="book_end" type="date" />
                </div>
                <div>
                    Total: <input name="total_price" type="float" />
                </div>
                <button type="submit">Create Booking</button>
            </form>
        </div>
    );
}