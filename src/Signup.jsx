import axios from "axios";
import { useState } from "react";

export function Signup() {
    const [errors, setErrors] = useState([]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors([]);
        const params = new FormData(event.target);
        axios.post("http://localhost:3000/users.json", params).then((response) => {
            console.log(response.data);
            event.target.reset();
            window.location.href = "/"; //change this to hide a modal, refirect to a specificc page, etc
        })
        .catch((errors) => {
            console.log(error.response.data.errors);
            setErrors(error.response.data.errors);
        });
    };

    return (
        <div id="signup">
            <h1>Signup</h1>
            <ul>
                {errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input name="name" type="text" />
                </div>
                <div>
                    Email: <input name="email" type="email" />
                </div>
                <div>
                    Password: <input name="password" type="password" />
                </div>
                {/* add birthday stuff */}
                <button type="submit">SignUp</button>
            </form>
        </div>
    );
}