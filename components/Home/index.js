import Image from "next/image";
import React from "react";
import { HomeBody, HomeProductService } from "../../utilities/data/homepage";
import Button from "../universal/Button";
import Container from "../universal/container";
import { HomePageWrapper } from "./home.styles";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <div className="app__home-body">
        {HomeBody.map(({ icon, title, button, content, id }) => (
          <div
            className={`app__home-bodyCard ${
              id % 2 === 0 ? "row-reverse" : null
            } ${id === 1 ? "app__home-hero" : null}`}
            key={id}
          >
            <Container
              className={`app__home-bodyCard ${
                id % 2 === 0 ? "row-reverse" : null
              }`}
            >
              <div className="app__home-bodyCardText">
                {title}
                {content.map(({ paragraph }) => (
                  <div key={Math.random()}> {paragraph}</div>
                ))}
                {button && <Button label={button} />}
              </div>
              <div className="app__home-bodyCardImage">
                <Image src={icon} alt={title} />
              </div>
            </Container>
          </div>
        ))}
      </div>

      <div className="app__home-products">
        <h2 className="app__title">Product and Service</h2>
        <Container>
          {HomeProductService.map(({ icon, title, content }) => (
            <div className="app__home-productCard" key={title}>
              <Image src={icon} alt={title} />
              <h3>{title}</h3>
              <p>{content}</p>
              <Button label="Read More" />
            </div>
          ))}
        </Container>
      </div>
    </HomePageWrapper>
  );
};
export default HomePage;
