import React from 'react';
import './Payment.scss';
import DataItem from '../../components/DataItem/DataItem';
import StepCount from '../../components/StepCount/StepCount';
import CompaniesForm from './CompaniesForm';
import StepsGrid from '../../components/StepsGrid/StepsGrid';
import { connect } from 'react-redux';
import { setDateAndTime, setValue } from '../../reducers/owner-reducer';
import { Redirect } from 'react-router';
import { isFetchingToggle, setCurrentStepIndex } from '../../reducers/steps-reducer';
import { compose } from 'redux';
import { withFetchLoader } from '../../hoc/withFetchLoader';

class Payment extends React.Component {
    getCarOwnerName() {
        let owner;
        this.props.carInfo.map(info => info.name == "owner" ? owner = info.value.split(" ") : null)
        owner = owner[0] + " " + owner[1];
        return owner;
    }

    render() {
        switch (this.props.currentStepIndex) {
            case 1: 
                return <Redirect to={"/"} />;
            case 2:
                return <Redirect to={"data-filling"} />;
            case 4:
                return <Redirect to={"summary"} />;
            default: 
                return (
                    <StepsGrid 
                        title={ 
                            <>
                                <StepCount count={ 3 }/>
                                <div className="text">
                                    Հարգելի <span>{ this.getCarOwnerName() }</span>՝ Խնդրում ենք ստուգել
                                    ստորև տեղեկատվությունը և անցնել վճարման
                                </div>
                            </>
                        }
                        topContent={ <CarDataComponent carInfo={this.props.carInfo} /> }  
                        desc={
                            <div className="text">
                                Խնդրում ենք ընտրել Ապահովագրական ընկերությունը `
                            </div>
                        }
                        bottomContent={
                            <>
                                <span className="text">Գումարը նշված է 5%-ով նվազեցված</span>
                                <CompaniesForm
                                    setCurrentStepIndex={this.props.setCurrentStepIndex}
                                    currentStepIndex={this.props.currentStepIndex}
                                    isFetchingToggle={this.props.isFetchingToggle}
                                />
                            </>
                        }
                    />
                );
        }
    }
}

let CarDataComponent = (props) => {

    return (
        <div className="data-items">
            { props.carInfo.map( (data, index) => {
                return data.value && <DataItem key={index} title={data.title} value={data.value}/> 
            }) }
        </div>
    );
}


let mapStateToProps = (state) => {      
    return {
        carInfo: state.owner.carInfo,
        currentStepIndex: state.stepsPage.currentStepIndex,
    }
}

export default compose(
    connect(mapStateToProps, {
        setValue,
        setDateAndTime,
        setCurrentStepIndex,
        isFetchingToggle,
    }), 
    withFetchLoader,
)(Payment);