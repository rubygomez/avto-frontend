import axios from "axios";
import "./index.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CarsIndex } from "./CarsIndex";
import { Modal } from "./Modal";
import { CarsShow } from "./CarsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { BookingsIndex } from "./BookingsIndex";
import { BookingsNew } from "./BookingsNew";
import { BModal } from "./BModal";
import { BookingsShow } from "./BookingsShow";
import { Home } from "./Home";

export function Content() {
  
  const [cars, setCars] = useState([]);                                     //defines state variable "cars". defines function "setCars" to handle updates
  const [isCarsShowVisible, setIsCarsShowVisible] = useState(false);
  const [carData, setCarData] = useState(null);
  const [currentCar, setCurrentCar] = useState({});
  const [bookings, setBookings] = useState([]);
  const [isBookingsShowVisible, setIsBookingsShowVisible] = useState(false);
  const [currentBooking, setCurrentBooking] = useState({});


  // useEffect(() => {
  //   const fetchCars = async () => {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://car-data.p.rapidapi.com/cars',
  //       params: {
  //         limit: '10',
  //         page: '0'
  //       },
  //       headers: {
  //         'X-RapidAPI-Key': '5e9b80b49bmsh4f5872a9af6f4bdp18b3b8jsn39df14db7676',
  //         'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  //       }
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data); 
  //       setCarData(response.data);// Assuming the API response is an array of car objects
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchCars();
  // }, []);


  const handleIndexCars = () => {                                           //function to fetch list of cars from backend
    console.log("handleIndexCars");
    axios.get("http://localhost:3000/cars.json").then((response) => {       //GET request
      console.log(response.data);
      setCars(response.data)                                                //updates the "cars" state variable w the new data fetched
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
    axios.post("http://localhost:3000/bookings", params).then((response) => {
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
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/cars" element={<CarsIndex cars={cars} />} />
        {/* <Route path="/cars" element={<CarsIndex carData={carData} />} /> */}
        <Route path="/cars/:id" element={<CarsShow />} />
        <Route path="/bookings" element={<BookingsIndex bookings={bookings} onShowBooking={handleShowBooking} /> } />
        <Route path="/bookings/new" element={<BookingsNew onCreateBooking={handleCreateBooking} />} />
      </Routes>
      <div className="container">
        {/* <CarsIndex cars={cars} onShowCar={handleShowCar} /> */}
        <Modal show={isCarsShowVisible} onClose={handleCarClose}>
          <CarsShow car={currentCar} />
        </Modal>
        {/* <BookingsIndex bookings={bookings} onShowBooking={handleShowBooking} /> */}
        {/* <BookingsNew onCreateBooking={handleCreateBooking} /> */}
        <BModal show={isBookingsShowVisible} onClose={handleBookingClose}>
          <BookingsShow booking={currentBooking} />
        </BModal>
      </div>
      {/* <div className="container">
            <div className="row">
                <div className="col">
                    <img src="https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid w-100" alt="main-image" />
                </div>
            </div>
        </div> */}
    </main>
  );
}


