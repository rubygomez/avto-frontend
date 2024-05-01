import { Link } from "react-router-dom";

export function Header() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg" style={{ height: "64px", padding: "0 10px"}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center">
                <div className="avto-brand">
                  <Link to="/" className="nav-link text-dark" style={{fontSize: "50px"}}>A V T O</Link>
                </div>
              </div>
              <div className="col-auto">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/cars" className="nav-link text-dark">All Vroomz</Link>
                </li>
                <li className="nav-item">
                  <Link to="/bookings" className="nav-link text-dark">My Bookings</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <Link to="/bookings/new" className="nav-link text-dark">New Booking</Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/signup" className="nav-link signup-link"> Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-dark login-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link text-dark logout-link">Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
}