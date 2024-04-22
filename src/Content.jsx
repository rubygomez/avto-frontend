import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CarsIndex } from "./CarsIndex";
import { Modal } from "./Modal";
import { CarsShow } from "./CarsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { BookingsIndex } from "./BookingsIndex";
import { BookingsNew } from "./BookingsNew";


export function Content() {
  
  const [cars, setCars] = useState([]);                                     //defines state variable "cars". defines function "setCars" to handle updates
  const [isCarsShowVisible, setIsCarsShowVisible] = useState(false);
  const [currentCar, setCurrentCar] = useState({});
  const [bookings, setBookings] = useState([]);

  const handleIndexCars = () => {                                           //function to fetch list of cars from backend
    console.log("handleIndexCars");
    axios.get("http://localhost:3000/cars.json").then((response) => {       //GET request
      console.log(response.data);
      setCars(response.data)                                                //updates the "cars" state variable w the new data fetched
    });
  };
  const handleIndexBookings = () => {                                           
    console.log("handleIndexBookings");
    axios.get("http://localhost:3000/cars.json").then((response) => {       
      console.log(response.data);
      setCars(response.data)                                                
    });
  };

  const handleShowCar = (car) => {
    console.log("handleShowCar", car);
    setIsCarsShowVisible(true);
    setCurrentCar(car);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsCarsShowVisible(false);
  };

  const handleCreateBooking = (params, successCallback) => {
    console.log("handleCreateBooking", params);
    axios.post("http://localhost:3000/bookings.json"), params.then((response) => {
      setBookings([...bookings, response.data]);
      successCallback();
    });
  };



  useEffect(handleIndexCars, []);                                           //useEffect hook: to RUN handleIndexCars
  useEffect(handleIndexBookings, []);

  return (
    <main>
      <Routes>
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <div className="container">
        <Login />
        <LogoutLink />
        <CarsIndex cars={cars} onShowCar={handleShowCar} />
        <Modal show={isCarsShowVisible} onClose={handleClose}>
          <CarsShow car={currentCar} />
        </Modal>
        <BookingsIndex bookings={bookings} />
        <BookingsNew onCreateBooking={handleCreateBooking} />
      </div>
    </main>
  );
}