import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="footer__logo">
              <img 
                src="/img/logo-green.png" 
                alt="Your logo" 
                className="img-fluid"
                style={{ height: '40px' }}
              />
            </div>
          </div>
          
          {/* Navigation */}
          <div className="col-md-4 mb-3 mb-md-0">
            <ul className="nav justify-content-center justify-content-md-start">
              <li className="nav-item">
                <a href="#" className="nav-link text-light">About us</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-light">Download apps</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-light">Become a guide</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-light">Careers</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-light">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Copyright */}
          <div className="col-md-4 text-center text-md-end">
            <p className="footer__copyright mb-0">
              &copy; {currentYear} by [Your Name]. Feel free to use this project for your own purposes, EXCEPT producing your own course or tutorials!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;