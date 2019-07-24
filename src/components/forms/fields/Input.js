import React from "react";

const Input = (props) => {
 return (
     <>
     <input {...props.input} type={props.type} placeholder={props.placeholder} value={props.value} /> 
     <span>{props.meta.touched && props.meta.error}</span>
     </>
 )
}

export default Input;