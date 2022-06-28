import React from "react";
import classes from './UiSelect.module.css';

const UiSelect = ({options, title, value, onChange, defaultValue}) => {
    return(
        <div className={classes.uiselect}>
            <div className={classes.uiselect__title}>{title}</div>
            <select
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        --{option.name}--
                    </option>
                )}
            </select>
        </div>
    )
}

export default UiSelect;