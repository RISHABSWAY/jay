import React from "react";
import { SiGooglemaps } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="row">
            <div className="col">
            <h3>Our Shop</h3>
            <p>
              1860, Surdas Sheth's Pole Naka, Mandvi's Pole, ManekChowk,
              Ahemdabad, Gujarat, India - 380001
            </p>
            </div>
            <div className="col">
              <h3>Links</h3>
              <div className="nav">
              <nav className="location">
              <a href="https://www.google.com/maps/dir//Giriraj+Metals+%7C+wholesaler+of+Kansa+%7C+copper+%7C+Br/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e844a4c000001:0x9a83300c4bb567ef!2m2!1d72.5890829!2d23.0209045">
                <SiGooglemaps size={30} />
              </a>
            </nav>
            <nav className="Whatsapp">
              <a href="https://wa.me/918401030943">
                <FaWhatsapp size={30} />
              </a>
            </nav>
            <nav className="CallUs">
              <a href="tel:8401030943">
                <FaPhoneAlt size={30} />
              </a>
            </nav>
            <nav className="Instagram">
              <a href="https://www.instagram.com/girirajexports/">
                <FaInstagram size={30} />
              </a>
            </nav>
            </div>
            </div>
          </div>
          <hr color="Black" />
        <div className="copyright">
          <p>&copy; 2023 Giriraj Exports. All Rights Reserved</p>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;