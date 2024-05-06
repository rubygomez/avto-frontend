import axios from "axios";
import "./index.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CarsIndex } from "./CarsIndex";
import { Modal } from "./Modal";
import { CarsShow } from "./CarsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { BookingsIndex } from "./BookingsIndex";
import { Home } from "./Home";


export function Content() {
  const [cars, setCars] = useState([]);                                     //defines state variable "cars". defines function "setCars" to handle updates
  const [isCarsShowVisible, setIsCarsShowVisible] = useState(false);
  const [carData, setCarData] = useState(null);
  const [currentCar, setCurrentCar] = useState({});
  const [bookings, setBookings] = useState([]);
  const [isBookingsShowVisible, setIsBookingsShowVisible] = useState(false);
  const [currentBooking, setCurrentBooking] = useState({});

  const handleIndexCars = () => {                                           //function to fetch list of cars from backend
    console.log("handleIndexCars");
    axios.get("http://localhost:3000/cars.json").then((response) => {       //GET request
      console.log(response);
      setCars(response.data);                                             //updates the "cars" state variable w the new data fetched
    });
  };
  const handleIndexBookings = () => {                                           
    console.log("handleIndexBookings");
    axios.get("http://localhost:3000/bookings.json").then((response) => {       
      console.log(response.data);
      setBookings(response.data);                                                
    });
  };

  const handleShowCar = (car) => {
    console.log("handleShowCar", car);
    setIsCarsShowVisible(true);
    setCurrentCar(car);
  };

  const handleCarClose = () => {
    console.log("handleClose");
    setIsCarsShowVisible(false);
  };

  const handleCreateBooking = (params, successCallback) => {
    console.log("handleCreateBooking", params);
    axios.post("http://localhost:3000/bookings.json", params).then((response) => {
      setBookings([...bookings, response.data]);
      successCallback();
    });
  };

  const handleShowBooking = (booking) => {
    console.log("handleShowBooking", booking);
    setIsBookingsShowVisible(true);
    setCurrentBooking(booking);
  };

  const handleBookingClose = () => {
    console.log("handleClose");
    setIsBookingsShowVisible(false);
  };


  useEffect(handleIndexCars, []);                                           //useEffect hook: to RUN handleIndexCars
  useEffect(handleIndexBookings, []);

  return (
    <>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />}
          <Route path="/login" element={<Login />} />}
          <Route path="/cars" element={<CarsIndex cars={cars} onCreateBooking={handleCreateBooking} onShowCar={handleShowCar} />} />
          <Route path="/cars/:id" element={<CarsShow />} />
          <Route path="/bookings" element={<BookingsIndex bookings={bookings} setBookings={setBookings} /> } />
        </Routes> 
        <div className="container">
          <Modal show={isCarsShowVisible} onClose={handleCarClose}>
            <CarsShow car={currentCar} />
          </Modal>
        </div>
      </main>
    </>
  );
}


