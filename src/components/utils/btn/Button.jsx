import React from 'react';
import "./btn.css"


const Button = (props) => {
    return (
        <button className= "btn" onClick={props.onClick} placeholder = {props.placeholder} > {props.title} </button>
    );
};

export default Button;