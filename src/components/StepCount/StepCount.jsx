import React from 'react';
import './StepCount.scss';
import titleDecore from '../../assets/img/decore/title-decore.svg';

class StepCount extends React.Component {
    render() {
        return (
            <div className="step-count">
                <span className="step-count__title">ՔԱՅԼ</span>
                <div className="step-count__number stroke-text stroke-text_purple">
                    {this.props.count}
                    <span><img src={titleDecore} alt="decore"/></span>
                </div>
            </div>
        );  
    }
}

export default StepCount;