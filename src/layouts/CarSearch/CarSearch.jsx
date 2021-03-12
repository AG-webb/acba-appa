import React from 'react';
import './CarSearch.scss';
import iconSearch from '../../assets/img/icons/search.svg';
import StepCount from '../../components/StepCount/StepCount';
import { Form, Input, Button } from 'antd';
import StepsGrid from '../../components/StepsGrid/StepsGrid';


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
                topContent={ <FindCar /> }
            />
        );
    }
}

let FindCar = () => {
    let onFinish = (values) => {
        // console.log('Success:', values);
    };
    
    let onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };

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
                name="passport"
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

export default CarSearch;