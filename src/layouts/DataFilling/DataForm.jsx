import React from 'react';
import { Form, Input, Button, Select, DatePicker, TimePicker  } from 'antd';
import ButtonCustom from '../../components/Button/Button';
import arrowRight from '../../assets/img/icons/arrow-right_white.svg';
import arrowLeft from '../../assets/img/icons/arrow-left_green.svg';
import arrowDown from '../../assets/img/icons/arrow-down.svg';
import dateIcon from '../../assets/img/icons/date.svg';
import timeIcon from '../../assets/img/icons/time.svg';
import moment from 'moment';
import InputNumber from '../../components/InputNumber/InputNumber';

const { Option } = Select;

class DataForm extends React.Component {
    onFinish = (values) => {
        // console.log('Success:', values);
    };
    
    onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };

    handleChange(value) {
        // console.log(`selected ${value}`);
    }
    
    dateOnChange(date, dateString) {
        // console.log(date, dateString);
    }

    timeOnChange(time, timeString) {
        // console.log(time, timeString);
    }

    render() {
        return (
            <Form
                name="data-form"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                className="data-form"
            >
                <Form.Item
                    label="Ավտոմեքենայի շահագործման նպատակ"
                >
                    <Select
                        style={{ width: "100%" }}
                        onChange={this.handleChange}
                        dropdownClassName={"custom-select__dropdown"}
                        placeholder={"Օրինակ՝ Անձնական նպատակով"}
                        suffixIcon={(<img src={arrowDown} alt="arrow down"/>)}
                    >
                        <Option value="1" className="custom-select__option">Անձնական նպատակով</Option>
                        <Option value="2" className="custom-select__option">Անձնական նպատակով 2</Option>
                        <Option value="3" className="custom-select__option">Անձնական նպատակով 3</Option>
                        <Option value="4" className="custom-select__option">Անձնական նպատակով 4</Option>
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
                    <Input placeholder={"Email"} />
                </Form.Item>
                <Form.Item
                    label="ՍԿիզբ"
                    className="ant-row_multiple"
                >
                    <Form.Item name="startDate">
                        <DatePicker
                            onChange={this.dateOnChange}
                            suffixIcon={(<img src={dateIcon} alt="date"/>)}
                            format={'DD/MM/YYYY'}
                            placeholder={"Ընտրել օրը"}
                        />
                    </Form.Item>
                    <Form.Item name="startTime">    
                        <TimePicker
                            onChange={this.timeOnChange}
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
                        onChange={this.dateOnChange}
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
}



export default DataForm;