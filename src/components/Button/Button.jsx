import React from 'react';
import { NavLink } from 'react-router-dom';
import './Button.scss';

let Button = (props) => {
    if(!props.link) {
        return(
            <div onClick={ () => props.callback()} className={`btn btn_${props.bg}`}>
                {props.icon ? <img src={props.icon} alt={props.icon + ""}/> : null}
                <span className="btn-font">{props.text}</span>
            </div>
        )
    } else {
        return(
            <NavLink to={props.link} className={`btn btn_${props.bg}`}>
                {props.icon ? <img src={props.icon} alt={props.icon + ""}/> : null}
                <span className="btn-font">{props.text}</span>
            </NavLink>
        )
    }
}

export default Button;