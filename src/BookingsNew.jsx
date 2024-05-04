// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export function BookingsNew(props) {
//     // const location = useLocation();
//     // const queryParams = new URLSearchParams(location.search);
//     // const carId = queryParams.get("car_id");

//     // const [startDate, setStartDate] = useState("");
//     // const [endDate, setEndDate] = useState("");

//     // const carIdRef  = useRef(null);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const params = new FormData(event.target);
//         props.onCreateBooking(params, () => event.target.reset());
//     };

//     // useEffect(() => {
//     //     if (carId && carIdRef.current) {
//     //         carIdRef.current.value = carId;
//     //     }
//     // }, [carId]);

//     return (
//         <div>
//             <h1>New Booking</h1>
//             <form onSubmit={handleSubmit} >
//                 <div>
//                     Car: <input name="car_id" type="integer" />
//                 </div>
//                 {/* <div>
//                     User: <input name="user_id" type="integer" />
//                 </div> */}
//                 <div>
//                     Start Date: <input name="book_start" type="date" />
//                 </div>
//                 <div>
//                     End Date: <input name="book_end" type="date" />
//                 </div>
//                 {/* <p>Total: {bookings.total_price}</p> */}
//                 <button type="submit">Create Booking</button>
//             </form>
//         </div>
//     );
// }