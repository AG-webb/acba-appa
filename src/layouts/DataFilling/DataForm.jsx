import React from 'react';
import { Form, Input, Button, Select, DatePicker, TimePicker, InputNumber } from 'antd';
import ButtonCustom from '../../components/Button/Button';
import arrowRight from '../../assets/img/icons/arrow-right_white.svg';
import arrowLeft from '../../assets/img/icons/arrow-left_green.svg';
import arrowDown from '../../assets/img/icons/arrow-down.svg';
import dateIcon from '../../assets/img/icons/date.svg';
import timeIcon from '../../assets/img/icons/time.svg';
import moment from 'moment';


const { Option } = Select;

let DataForm = (props) => {
    let onFinish = (values) => {
        let startDate = values.startDate.format('DD/MM/YYYY');
        let startTime = values.startTime.format('HH:mm');
        let endDate = values.endDate.format('DD/MM/YYYY');

        props.setCurrentStepIndex(3);
        props.setValue("usagePurpose", values.usagePurpose);
        props.setValue("email", values.email);
        props.setValue("phoneNumber", values.phoneNumber);
        props.setDateAndTime("startDate", startDate, startTime);
        props.setValue("endDate", endDate);
    };
    
    let onFinishFailed = (errorInfo) => {};
    let handleChange = (value) => {}
    let startDateOnChange = (date, dateString) => {}
    let endDateOnChange = (date, dateString) => {}
    let timeOnChange = (time, timeString) => {}
    
    return (
        <Form
            name="data-form"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="data-form"
        >
            <Form.Item
                label="Ավտոմեքենայի շահագործման նպատակ"
                name="usagePurpose"
            >
                <Select
                    style={{ width: "100%" }}
                    onChange={handleChange}
                    dropdownClassName={"custom-select__dropdown"}
                    placeholder={"Օրինակ՝ Անձնական նպատակով"}
                    suffixIcon={(<img src={arrowDown} alt="arrow down"/>)}
                >
                    <Option value="Անձնական նպատակով" className="custom-select__option">Անձնական նպատակով</Option>
                    <Option value="Անձնական նպատակով 2" className="custom-select__option">Անձնական նպատակով 2</Option>
                    <Option value="Անձնական նպատակով 3" className="custom-select__option">Անձնական նպատակով 3</Option>
                    <Option value="Անձնական նպատակով 4" className="custom-select__option">Անձնական նպատակով 4</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Հեռախոսահամար"   
                name="phoneNumber"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <InputNumber placeholder={"Հեռախոսահամար"}/>
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
            >
                <Input placeholder={"Email"}/>
            </Form.Item>
            <Form.Item
                label="ՍԿիզբ"
                className="ant-row_multiple"
            >
                <Form.Item name="startDate">
                    <DatePicker
                        onChange={startDateOnChange}
                        suffixIcon={(<img src={dateIcon} alt="date"/>)}
                        format={'DD/MM/YYYY'}
                        placeholder={"Ընտրել օրը"}
                    />
                </Form.Item>
                <Form.Item name="startTime">    
                    <TimePicker
                        onChange={timeOnChange}
                        suffixIcon={(<img src={timeIcon} alt="date"/>)}
                        initialValues={moment('00:00', 'HH:mm')}
                        format={'HH:mm'}
                        placeholder={"ժամ"}
                    />
                </Form.Item>
            </Form.Item>
            <Form.Item
                label="Ավարտ"
                name="endDate"
            >
                <DatePicker
                    onChange={endDateOnChange}
                    suffixIcon={(<img src={dateIcon} alt='date'/>)}
                    format={'DD/MM/YYYY'}
                    placeholder={"Ընտրել օրը"}
                />
            </Form.Item>
            <Form.Item className="ant-form__buttons">
                <ButtonCustom text={"ՆԱԽՈՐԴ"} icon={arrowLeft} bg={"white"} link={"/steps"}/>
                <Button className="btn btn_green" type="primary" htmlType="submit">
                    <span className="btn-font">ՀԱՋՈՐԴ</span>
                    <img src={arrowRight} alt="iconSearch"/>
                </Button>
            </Form.Item>
        </Form>
    );
}



export default DataForm;