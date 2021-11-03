import React from "react";

import { ButtonBack, ButtonFront } from "./index";

const Button = React.forwardRef((props, ref) => (
  <ButtonBack
    style={props.style}
    alt={props.alt}
    form={props.form}
    disabled={props.disabled}
  >
    {props.children}
    <ButtonFront
      ref={ref}
      alt={props.alt}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonFront>
  </ButtonBack>
));

export default Button;
