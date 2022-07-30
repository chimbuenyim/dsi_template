import Image from "next/image";
import React from "react";
import Container from "../universal/container";
import { ServicesWrapper } from "./services.styles";

import chatService from "../../assets/services/chat-service.svg";
import Background from "../../assets/services/Background.svg";
import { OurServices } from "../../utilities/data/services";

const ServicePage = () => {
  return (
    <ServicesWrapper>
      <div className="app__service-header ">
        <Container>
          Just a smile away from
          <h3 className="app__title app__color-name">
            Winning your customer’s trust
          </h3>
        </Container>
      </div>
      <div className="app__service-body">
        <Container>
          <div className="app__service-bodyCard">
            <div className="app__service-bodyCard-text">
              <h2>Our Service</h2>
              {OurServices.map(({ paragraph }) => (
                <p key={Math.random()}>{paragraph}</p>
              ))}
            </div>
            <div className="app__service-bodyCard-image">
              <Image src={chatService} alt={"service"} />
            </div>
          </div>
        </Container>
      </div>
    </ServicesWrapper>
  );
};

export default ServicePage;
