import { useParams } from "react-router-dom";
import "./Modal.css";

export function Modal(props) {
    const { id } = useParams();   //extract id from url

    const handleRedirect = () => {
        window.location.href = `/bookings/${id}`;
        props.onClose();
    };

    if (props.show) {
        return (
            <div className="modal-background">
                <section className="modal-main">
                    {props.children}
                    <button className="close" type="button" onClick={props.onClose}>
                        &#x2715;
                    </button>
                    <button className="book" type="button" onClick={handleRedirect}>
                        Book Now!
                    </button>
                </section>
            </div>
        );
    }
}