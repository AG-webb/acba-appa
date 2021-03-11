import React from 'react';
import './Payment.scss';
import { Form, Checkbox, Button, Radio } from 'antd';
import ButtonCustom from '../../components/Button/Button';
import checkIcon from '../../assets/img/icons/check-white.svg';
import arrowLeft from '../../assets/img/icons/arrow-left_green.svg';
import rgsLogo from '../../assets/img/companies/rgs.png';
import ingoLogo from '../../assets/img/companies/ingo.png';
import nairiLogo from '../../assets/img/companies/nairi.png';
import RadioItem from '../../components/RadioItem/RadioItem';

class CompaniesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }

    onRadioChange = e => {
        // console.log('radio checked', e.target.value);

        this.setState({
            value: e.target.value
        });
    };

    onFinish = (values) => {
        // console.log('Success:', values);
    };
    
    onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };

    onCheckboxChange(e) {
        // console.log(`checked = ${e.target.checked}`);
    }

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
        
        let companies = [
            {
                logo: rgsLogo,
                name: "Ռոսգոսստրախ-Արմենիա",
                price: "14 500 ֏",
            },
            {
                logo: ingoLogo,
                name: "ԻՆԳՈ ԱՐՄԵՆԻԱ",
                price: "12 400 ֏",
            },
            {
                logo: nairiLogo,
                name: "ՆԱԻՐԻ Ինշուրանս",
                price: "13 700 ֏",
            },
            {
                logo: rgsLogo,
                name: "Ռոսգոսստրախ-Արմենիա",
                price: "14 000 ֏",
            },
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
                        companies.map((company, index)=> {
                            return  <RadioItem value={index + 1} key={index} logo={company.logo} name={company.name} price={company.price}/>
                        })
                    }
                </Radio.Group>
                <Checkbox.Group className="companies-form__privacy" options={checkboxOptions} name={"privacy"} onChange={this.onCheckboxChange} />
                <Form.Item className="ant-form__buttons">
                    <ButtonCustom text={"ՆԱԽՈՐԴ"} icon={arrowLeft} bg={"white"} link={"/steps/data-filling"}/>
                    <Button className="btn btn_green" type="primary" htmlType="submit">
                        <span className="btn-font">վճարել</span>
                        <img src={checkIcon} alt="iconSearch"/>
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default CompaniesForm;