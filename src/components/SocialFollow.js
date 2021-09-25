import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";
export default function SocialFollow() {
  return (
    <div >
        
      <footer className="footer">
        <div className="social-container container d-flex justify-content-center">
        
          <h3>Follow me on</h3>
          <a
            href="https://github.com/skiran252"
            className="github social"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/saikirangonugunta08/"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.twitter.com/skiran252"
            className="twitter social"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/gsk_cool"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/saikiran-gonugunta/"
            className="linkedin social"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <p className="text-center">We do not store any of your data</p>
      </footer>
      
    </div>
  );
}
