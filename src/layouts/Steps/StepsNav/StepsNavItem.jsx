import React from 'react';
import './StepsNav.scss';
import checkIcon from '../../../assets/img/icons/check.svg';

class StepsNavItem extends React.Component {
    render() {
        return (
            <div className={`steps-nav__item ${this.props.status ? this.props.status : ""}`}>
                <div className="steps-nav__count">
                    <div className="steps-nav__count-wrap">
                        {this.props.status == "checked" ? <img src={checkIcon} alt="check icon"/> : this.props.index}
                    </div>
                </div>
                <div className="steps-nav__title">
                    {this.props.title}
                </div>
            </div>
        );
    }
}

export default StepsNavItem;