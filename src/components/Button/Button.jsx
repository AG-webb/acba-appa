import React from 'react';
import { NavLink } from 'react-router-dom';
import './Button.scss';

let Button = (props) => {
    return(
        <NavLink to={props.link ? props.link : "#"} className={`btn btn_${props.bg}`}>
            {props.icon ? <img src={props.icon} alt={props.icon + ""}/> : null}
            <span className="btn-font">{props.text}</span>
        </NavLink>
    )
}

export default Button;