import axios from "axios";
import { useState, useEffect } from "react";
import { CarsIndex } from "./CarsIndex";
import { Modal } from "./Modal";
import { CarsShow } from "./CarsShow";

export function Content() {
  
  const [cars, setCars] = useState([]);                                     //defines state variable "cars". defines function "setCars" to handle updates
  const [isCarsShowVisible, setIsCarsShowVisible] = useState(false);
  const [currentCar, setCurrentCar] = useState({});

  const handleIndexCars = () => {                                           //function to fetch list of cars from backend
    console.log("handleIndexCars");
    axios.get("http://localhost:3000/cars.json").then((response) => {       //GET request
      console.log(response.data);
      setCars(response.data)                                                //updates the "cars" state variable w the new data fetched
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

  useEffect(handleIndexCars, []);                                           //useEffect hook: to RUN handleIndexCars

  return (
    <div>
      <CarsIndex cars={cars} onShowCar={handleShowCar} />
      <Modal show={isCarsShowVisible} onClose={handleClose}>
        <CarsShow car={currentCar} />
      </Modal>
    </div>
  );
}