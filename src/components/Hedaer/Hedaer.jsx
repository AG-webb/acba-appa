import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Header.scss';
import HeaderContact from './HeaderContact/HeaderContact';

class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <div className="row">
                    <div className="column sm-14 lg-13">  
                        <div className="header__wrapper">
                            <div className="header__logo">  
                                <a href="#">
                                    <img src={logo} alt="acba-logo" />
                                </a>  
                            </div>
                            <HeaderContact />
                        </div>    
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;