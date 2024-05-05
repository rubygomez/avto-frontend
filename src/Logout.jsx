// import axios from "axios";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

// export function LogoutLink() {
//     const params = useParams();
//     const [logoutClicked, setLogoutClicked] = useState(false);

//     const handleClick = (event) => {
//         if (!logoutClicked) {
//             setLogoutClicked(true);

//             delete axios.defaults.headers.common["Authorization"];
//             localStorage.removeItem("jwt");
//             window.location.href = "/home";
//         }
//     };

//     return (
//        <button onClick={handleClick}>Logout</button>
//     );
// }