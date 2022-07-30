import React from "react";
import { ButtonWrapper } from "./button.styles";

const Button = (props) => {
  return (
    <ButtonWrapper>
      <button className={props.classname}>
        {props.icon && props.icon} {props.label}
      </button>
    </ButtonWrapper>
  );
};

export default Button;
