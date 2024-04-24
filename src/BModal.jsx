import "./Modal.css";

export function BModal(props) {
    if (props.show) {
        return (
            <div className="bmodal-background">
                <section className="bmodal-main">
                    {props.children}
                    <button className="close" type="button" onClick={props.onClose}>
                        &#x2715;
                    </button>
                </section>
            </div>
        )
    };
}