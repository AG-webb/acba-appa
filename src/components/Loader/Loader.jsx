import React from 'react';
import './Loader.scss';
import loaderImg from '../../assets/img/loader/loader.gif';

const Loader = (props) => {
    return (
        <div className="loader">
            <div className="loader__wrap">
                <div className="loader__img">
                    <img src={loaderImg} alt="loader"/>
                </div>
                <div className="loader__text">
                    Loading...
                </div>
            </div>
        </div>
    );
}

export default Loader;