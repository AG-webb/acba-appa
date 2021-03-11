import React from 'react';
import './StepsFooter.scss';
import FooterLinks from '../../components/FooterLinks/FooterLinks';
import zoomLogo from '../../assets/img/zoom.svg';

class StepsFooter extends React.Component {
    render() {
        return (
            <div className="steps-footer">
                <div className="steps-footer__links lg-order-2">
                    <FooterLinks />
                </div>
                <div className="steps-footer__info lg-order-1">
                    Բանկը վերահսկվում է ՀՀ ԿԲ կողմից։
                </div>
                <div className="steps-footer__by lg-order-3">
                    <span>Կայքի պատրաստում</span>
                    <a href="https://www.zoom.am">
                        <img src={zoomLogo} alt="Zoom Graphics"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default StepsFooter;