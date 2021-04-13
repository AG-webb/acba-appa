import React from 'react';
import './Payment.scss';
import { Form, Checkbox, Button, Radio } from 'antd';
import ButtonCustom from '../../components/Button/Button';
import checkIcon from '../../assets/img/icons/check-white.svg';
import arrowLeft from '../../assets/img/icons/arrow-left_green.svg';
import RadioItem from '../../components/RadioItem/RadioItem';
import { connect } from 'react-redux';

class CompaniesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }

    onRadioChange = (e) => {
        // console.log('radio checked', e.target.value);

        this.setState({
            value: e.target.value
        });
    }

    onFinish = (values) => {
        this.props.setCurrentStepIndex(4);
        this.props.isFetchingToggle(true);
    }
    onFinishFailed = (errorInfo) => {}
    onCheckboxChange = (e) => {}

    render() {
        const { value } = this.state;

        let checkboxOptions = [
            `Ծանոթացել և համաձայն եմ Բյուրոյի www.appa.am ինտերնետային
            կայքում հրապարակված ԱՊՊԱ ընդհանուր պայմաններին՝ ներառյալ
            ԱՊՊԱ պայմանագրի գործողության ընթացքում և դրանից հետո
            ծանուցումների կիրառման կարգին, ուստի խնդրում եմ դրանք
            համարել իմ կողմից ստացված`,
            `Տեղեկացված եմ, որ «ԱրՔա» վճարային համակարգի
            անդամ չհանդիսացող բանկի կողմից թողարկված քարտի
            միջոցով ապահովագրության դիմաց վճարում չի ընդունվում`,
        ];

        return (
            <Form
                name="companies-form"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                className="companies-form"
            >
                <Radio.Group onChange={this.onRadioChange} value={value} name={"companies"}>
                    {
                        this.props.companies.map((company, index)=> {
                            return  <RadioItem value={index + 1} key={index} logo={company.logoSm} name={company.name} price={company.price}/>
                        })
                    }
                </Radio.Group>
                <Form.Item
                    rules={[{ required: true, message: 'Please check!' }]}
                >
                    <Checkbox.Group className="companies-form__privacy" options={checkboxOptions} name={"privacy"} onChange={this.onCheckboxChange} />
                </Form.Item>
                <Form.Item className="ant-form__buttons">
                    <ButtonCustom
                        callback={ () => this.props.setCurrentStepIndex(this.props.currentStepIndex - 1)}
                        text={"ՆԱԽՈՐԴ"}
                        icon={arrowLeft}
                        bg={"white"}
                    />
                    <Button className="btn btn_green" type="primary" htmlType="submit">
                        <span className="btn-font">վճարել</span>
                        <img src={checkIcon} alt="iconSearch"/>
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

let mapStateToProps = (state) => {
    return {    
        companies: state.companies.companies,
    }
}

export default connect(mapStateToProps, {})(CompaniesForm);