import { useParams } from "react-router-dom";
import "./Modal.css";

export function Modal(props) {


    if (props.show) {
        return (
            <div className="modal-background">
                <section className="modal-main">
                    {props.children}
                    <button className="close" type="button" onClick={props.onClose}>
                        &#x2715;
                    </button>
                    {/* <Link to={`/bookings/${booking.id}`}>
                        <button onClick={() => props.}>

                        </button>
                    </Link> */}
                </section>
            </div>
        );
    }
}