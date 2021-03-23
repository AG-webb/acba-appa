import React from 'react';
import { connect } from 'react-redux';
import './StepsNav.scss';
import StepsNavItem from './StepsNavItem';

class StepsNav extends React.Component {

    render() {
        return (
            <div className="steps-nav">
                {this.props.steps.map((step, index) => {
                    if(this.props.currentStepIndex == index + 1) {
                        return  <StepsNavItem key={index} title={step.title} index={index + 1} status={"active"}/>
                    } else if (this.props.currentStepIndex > index + 1) {
                        return  <StepsNavItem key={index} title={step.title} index={index + 1} status={"checked"}/>
                    } else {
                        return  <StepsNavItem key={index} title={step.title} index={index + 1}/>
                    }
                })}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentStepIndex: state.stepsPage.currentStepIndex,
        steps: state.stepsPage.steps,
    }
}

export default connect(mapStateToProps, {})(StepsNav);