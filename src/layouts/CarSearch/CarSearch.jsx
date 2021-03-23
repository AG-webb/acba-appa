import React from 'react';
import './CarSearch.scss';
import iconSearch from '../../assets/img/icons/search.svg';
import StepCount from '../../components/StepCount/StepCount';
import { Form, Input, Button } from 'antd';
import StepsGrid from '../../components/StepsGrid/StepsGrid';
import { connect } from 'react-redux';
import { setCurrentStepIndex } from '../../redux/steps-reducer';
import { compose } from 'redux';
import { Redirect, withRouter } from 'react-router';
import { setValue } from '../../redux/owners-reducer';


class CarSearch extends React.Component {
    render() {
        return (
            <StepsGrid 
                title={
                    <>
                        <StepCount count={ 1 }/>
                        <div className="text">
                            Խնդրում ենք ստուգել ստորև
                            տեղեկատվությունը և
                            լրացնել ստորև դաշտերը
                        </div>
                    </>
                }
                topContent={ <FindCar {...this.props}/> }
            />
        );
    }
}

let FindCar = (props) => {
    
    let onFinish = (values) => {
        props.setCurrentStepIndex(2);
        props.setValue("passportNumber", values.passportNumber);
        props.setValue("carNumber", values.carNumber);
    };
    
    let onFinishFailed = (errorInfo) => { };

    switch (props.currentStepIndex) {
        case 2: 
            return <Redirect to={"steps/data-filling"} />;
        case 3:
            return <Redirect to={"steps/payment"} />;
        case 4:
            return <Redirect to={"steps/summary"} />;
        default: 
            return (
                <Form
                    name="findCar"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={ onFinish }
                    onFinishFailed={ onFinishFailed }
                >
                    <Form.Item
                        label="Անձը հաստատող փաստաթուղթ"
                        name="passportNumber"
                        rules={[{ required: true, message: 'Please input your passport!' }]}
                    >
                        <Input placeholder={ "xxxxxxxxxxx" } />
                    </Form.Item>
                    <Form.Item
                        label="Մեքենայի հաշվառման համարանիշ"
                        name="carNumber"
                        rules={[{ required: true, message: 'Please input your car number!' }]}
                    >
                        <Input placeholder={ "xxxxxxxxxxx" } />
                    </Form.Item>
                    <Form.Item className="ant-form__submit">
                        <Button className="btn btn_green" type="primary" htmlType="submit">
                            <img src={iconSearch} alt="iconSearch"/>
                            <span className="btn-font">ՓՆՏՐԵԼ</span>
                        </Button>
                    </Form.Item>
                </Form>
            );   
    }
}


let mapStateToProps = (state) => {
    return {
        currentStepIndex: state.stepsPage.currentStepIndex,
    }
}


export default compose(
    connect(mapStateToProps, {
        setCurrentStepIndex,
        setValue,
    }),
    withRouter,
)(CarSearch);