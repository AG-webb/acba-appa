import React from 'react';
import './Footer.scss';
import zoomLogo from '../../assets/img/zoom.svg';
import FooterLinks from '../FooterLinks/FooterLinks';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="row">
                    <div className="column sm-14">
                        <FooterLinks />
                        <div className="footer__info">
                            <div className="text">Արամի 82-84, Երևան, Հայաստան</div>
                            <a href="tel:+37410318888" className="text">(+374 10) 31 88 88</a>
                            <a href="https://www.acba.am" className="text">www.acba.am</a>
                            <div className="text">Բանկը վերահսկվում է ՀՀ ԿԲ կողմից։</div>
                        </div>
                        <div className="footer__copyright">
                            © Copyright | Բոլոր իրավունքները պաշտպանված են:
                        </div>
                        <div className="footer__by">
                            <span>Կայքի պատրաստում</span>
                            <a href="https://www.zoom.am">
                                <img src={zoomLogo} alt="Zoom Graphics"/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;