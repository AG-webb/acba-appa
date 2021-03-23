import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { compose } from 'redux';
import DataItem from '../../components/DataItem/DataItem';
import StepCount from '../../components/StepCount/StepCount';
import StepsGrid from '../../components/StepsGrid/StepsGrid';
import { setDateAndTime, setValue } from '../../redux/owners-reducer';
import { setCurrentStepIndex } from '../../redux/steps-reducer';
import './DataFilling.scss';
import DataForm from './DataForm';



class DataFilling extends React.Component {
    render() {
        switch (this.props.currentStepIndex) {
            case 1: 
                return <Redirect to={"/"} />;
            case 3:
                return <Redirect to={"payment"} />;
            case 4:
                return <Redirect to={"summary"} />;
            default: 
                return (
                    <StepsGrid 
                        title={ 
                            <>
                                <StepCount count={ 2 }/>
                                <div className="text">
                                    Խնդրում ենք ստուգել
                                    ստորև տեղեկատվությունը և
                                    լրացնել ստորև դաշտերը
                                </div>
                            </>
                        }
                        topContent={ <CarDataComponent owner={this.props.owner}/> }
                        desc={
                            <div className="text">
                                Խնդրում ենք լրացնել ստորև դաշտերը
                            </div>
                        }
                        bottomContent={ <DataForm {...this.props}/> }
                    />
                );
        }
    }
}

let CarDataComponent = (props) => {
    return (
        <div className="data-items">
            { props.owner.map( (data, index) => {
                    return data.value && <DataItem key={index} title={data.title} value={data.value}/> 
                }) }
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        owner: state.owner.carInfo,
        currentStepIndex: state.stepsPage.currentStepIndex,
    }
}

export default compose(
    connect(mapStateToProps, {
        setValue,
        setDateAndTime,
        setCurrentStepIndex,
    }),
    withRouter,
)(DataFilling);