import React from "react";
import { Button } from "react-bootstrap";

function ButtonComponent({ type, value, disabled, clickHandler, ...props }) {
  return (
    <Button type={type} disabled={disabled} onClick={clickHandler} {...props}>
      {value}
    </Button>
  );
}

export default ButtonComponent;
