import React from 'react';
import './FooterLinks.scss';
import fbIcon from '../../assets/img/icons/facebook.svg';
import instaIcon from '../../assets/img/icons/instagram.svg';
import twitterIcon from '../../assets/img/icons/twitter.svg';
import inIcon from '../../assets/img/icons/linkedin.svg';

class FooterLinks extends React.Component {
    
    render() {
        return (    
            <div className="footer-links">
                <a href="#">
                    <img src={fbIcon} alt="facebook"/>
                </a>
                <a href="#">
                    <img src={instaIcon} alt="instagram"/>
                </a>
                <a href="#">
                    <img src={twitterIcon} alt="twitter"/>
                </a>
                <a href="#">
                    <img src={inIcon} alt="linkedin"/>
                </a>
            </div>
        );
    }
}

export default FooterLinks;