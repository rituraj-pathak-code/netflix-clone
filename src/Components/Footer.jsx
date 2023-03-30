import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ul className="footer__items">
          <li className="footer__item">
            <a className="footer__link" href="#">
              Audio Description
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Investor Relations
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Legal Notice
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Service Code
            </a>
          </li>
          <li className="footer__item">
            <p className="footer__copyright">
              © Netflix Clone : By Rituraj Pathak
            </p>
          </li>
        </ul>
      </div>
      <div>
        <ul className="footer__items">
          <li className="footer__item">
            <a className="footer__link" href="#">
              Help Center
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Jobs
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Cookie Preference
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="footer__items">
          <li className="footer__item">
            <a className="footer__link" href="#">
              Gift Cards
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Terms of use
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="footer__items">
          <li className="footer__item">
            <a className="footer__link" href="#">
              Media Center
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Corporate Information
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Contact us
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Privacy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
