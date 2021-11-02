import React from "react";
import Button from "./Button";

import { ButtonBack, ButtonFront } from "./index";

const LinkButton = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <Button href={href} onClick={onClick} ref={ref}>
      {children}
    </Button>
  );
});

export default LinkButton;
