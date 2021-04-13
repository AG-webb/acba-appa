import React from 'react';
import './Partners.scss';
import partnersIcon from '../../assets/img/icons/partners.svg';
import Partner from './Partner/Partner';
import pen from '../../assets/img/icons/pen.svg';
import Button from '../Button/Button';
import { connect } from 'react-redux';

class Partners extends React.Component {

    render() {
        return (
            <div className="partners">
                <div className="dots-decore dots-decore_orange"></div>
                <div className="dots-decore dots-decore_green"></div>
                <div className="row">
                    <div className="column sm-14">
                        <div className="partners__heading">
                            <div className="partners__icon">
                                <img src={partnersIcon} alt="partners"/>
                            </div>
                            <div className="partners__title h2-font">
                                ԳործԸՆԿԵՐՆԵՐ
                            </div>
                        </div>
                        <div className="partners__list">
                            {
                                this.props.companies.map((company, index) => {
                                    return <Partner key={index} name={company.name} logo={company.logo} desc={company.desc}/>
                                })
                            }
                        </div>
                        <div className="inline-btn">
                            <div className="inline-btn__wrap">
                                <Button icon={pen} text={`ԿՆՔԵԼ ԱՊՊԱ`} bg={"green"} link={"/steps"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        );
    }
}

let mapStateToProps = (state) => {
    return {
        companies: state.companies.companies,
    }
}

export default connect(mapStateToProps, {})(Partners);