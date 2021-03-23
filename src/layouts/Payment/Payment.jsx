import React from 'react';
import './Payment.scss';
import DataItem from '../../components/DataItem/DataItem';
import StepCount from '../../components/StepCount/StepCount';
import CompaniesForm from './CompaniesForm';
import StepsGrid from '../../components/StepsGrid/StepsGrid';
import { connect } from 'react-redux';
import { setDateAndTime, setValue } from '../../redux/owners-reducer';
import { Redirect } from 'react-router';
import { setCurrentStepIndex } from '../../redux/steps-reducer';

class Payment extends React.Component {
    render() {
        let owner = {
            name: "Զառա Պետրոսյան",
        }

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
                                    ՀԱՐԳԵԼԻ <span>{ owner.name }</span>՝ Խնդրում ենք ստուգել
                                    ստորև տեղեկատվությունը և անցնել վճարման
                                </div>
                            </>
                        }
                        topContent={ <CarDataComponent owner={this.props.owner} /> }  
                        desc={
                            <div className="text">
                                Խնդրում ենք ընտրել Ապահովագրական ընկերությունը `
                            </div>
                        }
                        bottomContent={
                            <>
                                <span className="text">Գումարը նշված է 5%-ով նվազեցված</span>
                                <CompaniesForm setCurrentStepIndex={this.props.setCurrentStepIndex}/>
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

export default  connect(mapStateToProps, {
    setValue,
    setDateAndTime,
    setCurrentStepIndex,
})(Payment);