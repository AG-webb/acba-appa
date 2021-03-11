import React from 'react';
import './HeaderContact.scss';

class HeaderContact extends React.Component {
    render() {
        return (
            <div className="header-contact">
                <div className="header-contact__phone text">
                    <a href="tel:+37410318888">(+374 10) 31 88 88</a>
                </div>
                <div className="header-contact__link text">
                    <a href="https://www.acba.am">www.acba.am</a>
                </div>
            </div>
        );
    }
}

export default HeaderContact;