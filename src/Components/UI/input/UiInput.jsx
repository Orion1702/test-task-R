import React from "react";
import classes from './UiInput.module.css';

const UiInput = (props) => {
    return (
        <input className={classes.UiInput}  {...props}/>
    )
}

export default UiInput;