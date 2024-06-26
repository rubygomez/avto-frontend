import { Modal } from "./Modal";
import { useEffect, useState } from "react";

export function CarsIndex(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [totalCost, setTotalCost] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    
    const calculateTotal = () => {
        console.log("Calculate total called");
        console.log("Start date:", startDate);
        console.log("End Date:", endDate);
        console.log("Selected Car:", selectedCar);
        if (startDate && endDate && selectedCar) {
            const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
            const rate = selectedCar.rate;
            const cost = days * rate;
            setTotalCost(cost);
            // props.onTotalCostChange(cost);
        }
    };


    const handleBookNow = (car) => {
        setSelectedCar(car);
        setModalOpen(true);
    };

    const handleConfirmBooking = () => {
        props.onCreateBooking(selectedCar, () => {
            setModalOpen(false);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("car_id", selectedCar.id);
        props.onCreateBooking(formData, () => {
            setModalOpen(false);
            setStartDate("");
            setEndDate("");
        });
    };

    return (
        <div>
            <div className="container mt-5">
                <form>
                    <div className="row g-3">
                        <div className="col-md-4">
                            <label for="location" className="form-label">Location</label>
                            <input type="text" className="form-control" id="location" placeholder="Enter location"/>
                        </div>
                        <div className="col-md-4">
                            <label for="start-date" className="form-label">Start Date</label>
                            <input type="date" className="form-control" id="start-date"/>
                        </div>
                        <div className="col-md-4">
                            <label for="end-date" className="form-label">End Date</label>
                            <input type="date" className="form-control" id="end-date"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Search</button>
                </form>
            </div>

            <h1>Book your next ride now</h1>
            <div className="row row-cols-1 row-cols-md-3">
                {props.cars.map((car) => (
                    <div key={car.id} className="col mb-">
                        <div className="card" style={{ maxWidth: "540px"}}>
                            <div className="row g-0">
                                <div style={{ maxHeight: "200px", width: "100%"}}>  
                                    <img src={car.image_url} className="img-fluid rounded-start" alt={`${car.year} ${car.make} ${car.model}`} style={{ width:"100%", height: "200px", objectFit:"cover", borderRadius: "10px" }} />
                                </div>
                                <div className="col-md-8" style={{ fontSize: "0.9rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{car.year} {car.make} {car.model}</h5>
                                        {/* <p className="card-text"><strong>Description:</strong></p>
                                    
                                        <p className="card-text">Transmission: {car.transmission}</p> */}
                                        <p className="card-text">Rate: ${car.rate}/hour</p>
                                        <button onClick={() => handleBookNow(car)}>Book Now</button>
                                        {/* <button onClick={() => props.onShowCar(car)}>More Info</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                <div className="confirm-modal">
                    <h2>Confirm Booking</h2>
                    <h3>{selectedCar && `${selectedCar.year} ${selectedCar.make} ${selectedCar.model}` }</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="book_start">Start Date:</label>
                            <input 
                            id="book_start" 
                            name="book_start" 
                            type="date" 
                            value={startDate} onChange={(e) => {
                                console.log("start date changed", e.target.value);
                                setStartDate(e.target.value);
                            }}/>
                        </div>
                        <div>
                            <label htmlFor="book_end">End Date:</label>
                            <input 
                            id="book_end" 
                            name="book_end" 
                            type="date" 
                            value={endDate}
                            onChange={(e) => {
                                console.log("end date changed", e.target.value);
                                setEndDate(e.target.value);
                            }}
                            />
                        </div>
                        <div>
                            {/* <p>{selectedCar.rate}/day</p> */}
                            <p>Total: ${totalCost}</p>
                        </div>
                        <button type="button" onClick={calculateTotal}>Calculate</button>
                        <button type="submit">Confirm Booking</button>
                        <button onClick={() => setModalOpen(false)}>Cancel</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}