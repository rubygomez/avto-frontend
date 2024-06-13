import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function Header() {
  const handleLogout = () => {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/home";
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
      setIsLoggedIn(true);
    }
  }, []);
  
    return (
      <header>
        <nav className="navbar navbar-expand-lg" style={{ height: "100px", padding: "0 20px"}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center">
                <div className="avto-brand">
                  <Link to="/home" className="nav-link text-dark" style={{fontSize: "40px"}}>a v t o</Link>
                </div>
              </div>
              <div className="col-auto">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            <div className="collapse navbar-collapse justify-content-right" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/home" className="nav-link text-dark" style={{fontSize: "18px"}}>home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cars" className="nav-link text-dark" style={{fontSize: "18px"}}>cars</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link text-dark" style={{fontSize: "18px"}}>services</Link>
                </li>
                {/* removes bookings when logged out */}
                {isLoggedIn && (
                  <li className="nav-item">
                    <Link to="/bookings" className="nav-link text-dark" style={{fontSize: "18px"}}>bookings</Link>
                  </li>
                )}
              </ul>
            </div>
            {/* user accounts */}
            <ul className="navbar-nav">
              {!localStorage.getItem("jwt") && (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link login-link" style={{fontSize: "20px"}}>LOG IN</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link signup-link" style={{fontSize: "20px"}}> SIGN UP</Link>
                  </li>
                </>
              )}
              {localStorage.getItem("jwt") && (
                <li className="nav-item">
                  <Link to="/logout" className="nav-link logout-link" style={{fontSize: "20px"}} onClick={handleLogout}>LOGOUT</Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    );
}