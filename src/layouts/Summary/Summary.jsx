import React from 'react';
import './Summary.scss';
import StepsFooter from '../../components/StepsFooter/StepsFooter';
import successIcon from '../../assets/img/icons/success.svg';
import Button from '../../components/Button/Button';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFetchLoader } from '../../hoc/withFetchLoader';

class Summary extends React.Component {
    render() {

        switch (this.props.currentStepIndex) {
            case 1: 
                return <Redirect to={"/"} />;
            case 2:
                return <Redirect to={"steps/data-filling"} />;
            case 3:
                return <Redirect to={"steps/payment"} />;
            default: 
                return (
                    <div className="steps-grid">
                        <div className="row success-block">
                            <div className="column sm-14 md-shrink">
                                <div className="success-block__icon">
                                    <img src={successIcon} alt="success icon"/>
                                </div>
                            </div>
                            <div className="column sm-14 md-10 lg-9 xxxl-7">
                                <div className="success-block__title">Գործարքը հաջողությամբ իրականացվեց</div>
                                <div className="success-block__message desc">
                                    Խնդրում ենք ստուգել 2րդ քայլում նշված էլ. հասցեն՝ 
                                    <span> 
                                        {
                                            this.props.carInfo.map(info => info.name == "email" ? " " + info.value + " " : null)
                                        }
                                    </span>
                                    պայմանագիրը տեսնելու համար
                                </div>
                                <div className="success-block__btn">
                                    <Button text={"վերադառնալ գլխավոր էջ"} bg={"green"} link={"/"}/>    
                                </div>
                            </div>
                        </div>
                        <div className="row"></div>
                        <div className="row expanded">
                            <div className="column sm-14 xxl-11 xxxl-12">
                                <StepsFooter />
                            </div>
                        </div>
                    </div>
                );
        }
    }
}

let mapStateToProps = (state) => {
    return {
        carInfo: state.owner.carInfo,
        currentStepIndex: state.stepsPage.currentStepIndex,
    }
}

export default compose(
    connect(mapStateToProps),
    withFetchLoader,
)(Summary);