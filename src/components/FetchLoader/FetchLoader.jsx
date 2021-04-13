import React from 'react';
import './FetchLoader.scss';
import loader from '../../assets/img/loader/fetch-loader.gif';

const FetchLoader = (props) => {
    return (
        <div className="fetch-loader">
            <img src={loader} alt="loading"/>
        </div>
    );
}

export default FetchLoader;