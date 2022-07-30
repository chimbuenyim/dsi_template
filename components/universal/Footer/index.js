import React from "react";
import { FooterWrapper } from "./footer.styles";

import Container from "../container";
import Image from "next/image";

import logo from "../../../assets/logo.svg";
import patners from "../../../assets/home/patners.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="app__footer-address">
          <div className="app__footer-addressCard">
            <div className="app__footer-addressCardHeader">
              <Image src={logo} alt={"Company Logo"} />
            </div>
            <div className="app__footer-addressCardContent">
              <h4>PT Dwidasa Samsara Indonesia</h4>
              <p>
                Ruko Jalur Setera 29A No. 53 <br />
                Alam Sutera Serpong, Tangerang 15323
              </p>
            </div>
          </div>

          <div className="app__footer-addressCard">
            <div className="app__footer-addressCardHeader">
              <h3>Contact</h3>
            </div>
            <div className="app__footer-addressCardContent">
              <p>Phone: +234-905-1809-770</p>
              <p>Fax: +234-905-1809-770</p>
              <p>Email:info@tech.com</p>
            </div>
          </div>

          <div className="app__footer-addressCard">
            <div className="app__footer-addressCardHeader"></div>
            <div className="app__footer-addressCardContent">
              <Image src={patners} alt="Patners" />
            </div>
          </div>
        </div>
      </Container>
      <div className="app__footer-copyright">
        Copyright &copy; {new Date().getFullYear()} - <b>Emeka Duruji</b>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
