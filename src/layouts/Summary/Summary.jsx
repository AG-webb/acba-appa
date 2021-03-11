import React from 'react';
import './Summary.scss';
import StepsFooter from '../../components/StepsFooter/StepsFooter';
import successIcon from '../../assets/img/icons/success.svg';
import Button from '../../components/Button/Button';

class Summary extends React.Component {
    render() {
        let email = "zarapetrosyan@gmail.com";

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
                            <span> {email} </span>
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

export default Summary;