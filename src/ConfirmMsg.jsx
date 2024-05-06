import React from "react";

export function ConfirmMsg({ message, onConfirm, onCancel}) {
    return (
        <div className="confirm-modal">
            <div className="confirm-modal-content">
                <p>{message}</p>
            </div>
            <button onClick={onConfirm}>Yes</button>
            <button onClick={onCancel}>No</button>

        </div>
    )
}