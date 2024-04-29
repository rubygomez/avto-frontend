import { Link } from "react-router-dom";

export function Header() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg" style={{ height: "64px", padding: "0 10px",backgroundColor: "rgb(90,82,99" }}>
          <div className="container-fluid">
            <Link to="/home" className="nav-link text-light" style={{fontSize: "50px"}}><strong>AVTO</strong></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/cars" className="nav-link text-light">All Vroomz</Link>
                </li>
                <li className="nav-item">
                  <Link to="/bookings" className="nav-link text-light">My Bookings</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <Link to="/bookings/new" className="nav-link text-light">New Booking</Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/signup" className="nav-link text-light sign-link"> Join Now</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-light sign-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link text-light sign-link">Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
}