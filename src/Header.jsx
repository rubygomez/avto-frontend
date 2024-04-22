import { Link } from "react-router-dom";

export function Header() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">AVTO</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled text-light" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Join</a>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link text-light sign-link">Sign Up</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
}