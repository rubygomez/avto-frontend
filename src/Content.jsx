import { axios } from "axios";
import { useState, useEffect } from "react";
import { CarsIndex } from "./CarsIndex";

export function Content() {
  
  const [cars, setCars] = useState([]);     //defines state variable "cars". defines function "setCars" to handle updates

  const handleIndexCars = () => {      //function to fetch list of cars from backend
    console.log("handleIndexCars");
    axios.get("http://localhost:3000/cars.json").then((response) => {   //GET request
      console.log(response.data);
      setCars(response.data)            //updates the "cars" state variable w the new data fetched
    });
  };

  useEffect(handleIndexCars, []);      //useEffect hook: to RUN handleIndexCars

  return (
    <div>
      <CarsIndex cars={cars} />
    </div>
  );
}