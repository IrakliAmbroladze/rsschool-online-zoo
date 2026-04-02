import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="upper-footer">
          <div className="logos">
            <Link
              to="https://geolab.edu.ge/"
              className="logo-geolab"
              target="_blank"
            >
              <img src="../assets/images/geolab.svg" alt="logo-geolab" />
            </Link>
            <div className="logo-zoo">
              <img src="../assets/images/logo-white.svg" alt="logo-white" />
            </div>
            <Link to="/" className="logo-yem">
              <img src="../assets/images/yem.svg" alt="logo-yem" />
            </Link>
          </div>
          <nav className="nav">
            <Link to="/" className="nav-link">
              About
            </Link>
            <Link to="/map/" className="nav-link">
              Map
            </Link>
            <Link to="/zoos/" className="nav-link">
              Zoos
            </Link>
            <Link to="/contact-us/" className="nav-link">
              Contact us
            </Link>
          </nav>
          <button className="btn">
            <span>Donate for volunteers</span>
            <img src="../assets/icons/arrow.svg" alt="arrow" />
          </button>
        </div>
        <div className="separator"></div>
        <div className="down-footer">
          <div className="navigations-container">
            <ul className="soc-media-container">
              <li>
                <a href="https://www.youtube.com/" target="_blank">
                  <img src="../assets/icons/YouTube.svg" alt="YouTube" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <img src="../assets/icons/Instagram.svg" alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  <img src="../assets/icons/Facebook.svg" alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>
          <ul className="copyright">
            <li>© 2021 DinaK</li>
            <li>© Yem Digital</li>
            <li>© RSSchool</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
