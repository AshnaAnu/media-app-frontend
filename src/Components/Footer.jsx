import React from 'react'
import '../Pages/LandingPage.css'
import { IoCaretForwardCircle } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (

    <div>
      <footer className="text-center text-lg-start bg-primary text-muted ">
        <section >
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  <IoCaretForwardCircle />MediaPlayerPro
                </h6>
                <p>
                  At MediaPlayerPro, we deliver the best streaming experience.With top-notch<br /> audio and video quality, your <br />entertainment is always at its peak.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Contact Us
                </h6>
                <p>Email: <a href="mailto:support@mediaplayer.com" className='text-body text-decoration-none text-light'>support@mediaplayer.com</a></p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Media Lane,<br /> Entertainment City</p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Quick Links
                </h6>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">Home</a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">Features</a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">FAQ'S</a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">Pricing</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-4">

                <h6 className="text-uppercase fw-bold mb-4 ">Follow Us</h6>
                <p><a href="#" className='text-light text-decoration-none'>Facebook <FontAwesomeIcon icon={faFacebookF} /></a></p>
                <p><a href="#" className='text-light text-decoration-none'>Twitter <FontAwesomeIcon icon={faTwitter} /></a></p>
                <p><a href="#" className='text-light text-decoration-none'>Instagram <FontAwesomeIcon icon={faInstagram} /></a></p>
                <p><a href="#" className='text-light text-decoration-none'>Youtube <FontAwesomeIcon icon={faLinkedin} /></a></p>
              </div>

            </div>

          </div>
          <hr />
        </section>



        <div className="text-center p-4">
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MediaPlayerPro.com</a>
        </div>

      </footer>

    </div>
  );
}

export default Footer