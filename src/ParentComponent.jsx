import { useState, useEffect } from "react";
import { CarsIndex } from "./CarsIndex";
import { BookingsShow } from "./BookingsShow";
import { BookingsIndex } from "./BookingsIndex";

export function ParentComponent() {
    const [totalCost, setTotalCost] = useState(0);

    console.log("total cost in parent component", totalCost);

    return (
        <div>
            <CarsIndex onTotalCostChange={setTotalCost} />
            <BookingsIndex totalCost={totalCost} />
            <BookingsShow totalCost={totalCost} />
        </div>
    );
}