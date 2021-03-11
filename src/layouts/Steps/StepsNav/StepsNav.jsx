import React from 'react';
import './StepsNav.scss';
import StepsNavItem from './StepsNavItem';

class StepsNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepIndex: 3,
        };
    }

    render() {
        let steps = [
            {
                title: "Ավտոմեքենայի և ապահովադրի որոնում",
            },
            {
                title: "Տվյալների լրացում",
            },
            {
                title: "Տվյալների ստուգում և վճարում",
            },
            {
                title: "Ամփոփում",
            },
        ];

        return (
            <div className="steps-nav">
                {steps.map((step, index) => {
                    if(this.state.currentStepIndex == index + 1) {
                        return  <StepsNavItem key={index} title={step.title} index={index + 1} status={"active"}/>
                    } else if (this.state.currentStepIndex > index + 1) {
                        return  <StepsNavItem key={index} title={step.title} index={index + 1} status={"checked"}/>
                    } else {
                        return  <StepsNavItem key={index} title={step.title} index={index + 1}/>
                    }
                })}
            </div>
        );
    }
}

export default StepsNav;