import React from "react";
import { Form } from "semantic-ui-react";

const Input = props => {
  return (
    <>
      <Form.Input {...props.input} type={props.type} />
      <span>{props.meta.touched && props.meta.error}</span>
    </>
  );
};

export default Input;
