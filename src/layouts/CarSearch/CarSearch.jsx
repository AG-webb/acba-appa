import React from 'react';
import './CarSearch.scss';
import iconSearch from '../../assets/img/icons/search.svg';
import StepCount from '../../components/StepCount/StepCount';
import { Form, Input, Button } from 'antd';
import StepsFooter from '../../components/StepsFooter/StepsFooter';


class CarSearch extends React.Component {
    onFinish = (values) => {
        // console.log('Success:', values);
    };
    
    onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div className="steps-grid">
                <div className="row expanded align-center lg-align-left">
                    <div className="column sm-14 lg-5 xl-4">
                        <div className="steps-grid__title steps-grid__left-side">
                            <StepCount count={1}/>
                            <div className="text">
                                Խնդրում ենք ստուգել ստորև
                                տեղեկատվությունը և
                                լրացնել ստորև դաշտերը
                            </div>
                        </div>
                    </div>
                    <div className="column sm-14 md-12 lg-9 xxxl-8">
                        <div className="steps-grid__top-content">
                            <Form
                                name="findCar"
                                layout="vertical"
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                            >
                                <Form.Item
                                    label="Անձը հաստատող փաստաթուղթ"
                                    name="passport"
                                    rules={[{ required: true, message: 'Please input your passport!' }]}
                                >
                                    <Input placeholder={"xxxxxxxxxxx"} />
                                </Form.Item>
                                <Form.Item
                                    label="Մեքենայի հաշվառման համարանիշ"
                                    name="carNumber"
                                    rules={[{ required: true, message: 'Please input your car number!' }]}
                                >
                                    <Input placeholder={"xxxxxxxxxxx"} />
                                </Form.Item>
                                <Form.Item className="ant-form__submit">
                                    <Button className="btn btn_green" type="primary" htmlType="submit">
                                        <img src={iconSearch} alt="iconSearch"/>
                                        <span className="btn-font">ՓՆՏՐԵԼ</span>
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>

                <div className="row expanded">
                    <div className="column sm-14 xxl-11 xxxl-12">
                        <StepsFooter />
                    </div>
                </div>
            </div>
        );
    }
}

export default CarSearch;