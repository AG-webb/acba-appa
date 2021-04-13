import React from 'react';
import CarSearch from '../CarSearch/CarSearch';
import Payment from '../Payment/Payment';
import DataFilling from '../DataFilling/DataFilling';
import logo from '../../assets/img/logo-light.svg';
import HeaderContact from '../../components/Hedaer/HeaderContact/HeaderContact';
import { NavLink, Route } from 'react-router-dom';
import Summary from '../Summary/Summary';
import StepsNav from './StepsNav/StepsNav';
import { pageReadyToggle } from '../../reducers/steps-reducer';
import Loader from '../../components/Loader/Loader';
import './Steps.scss';
import { connect } from 'react-redux';


class Steps extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.pageReadyToggle(true);
        }, 1000);
    }

    render() {
        if(!this.props.isReady) {
            return <Loader />
        }
        
        return (
            <div className="steps">
                <div className="steps-header">
                    <div className="steps-header__logo">
                        <NavLink to="/">
                            <img src={logo} alt="acba logo"/>
                        </NavLink>
                    </div>
                    <HeaderContact />
                </div>
                <div className="steps__nav">
                    <div className="dots-decore dots-decore_green-dark"></div>
                    <StepsNav />
                </div>
                <div className="steps__content">
                    <div className="dots-decore dots-decore_green"></div>
                    <Route path="/steps" exact={true} render={ () => <CarSearch />  } />
                    <Route path="/steps/data-filling" render={ () => <DataFilling />  } />
                    <Route path="/steps/payment" render={ () => <Payment />  } />
                    <Route path="/steps/summary" render={ () => <Summary />  } />
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isReady: state.stepsPage.isReady,
    }
}

export default connect(mapStateToProps, {
    pageReadyToggle,
})(Steps);