import React from 'react';
import { Input } from 'antd';

class NumericInput extends React.Component {
    onChange = e => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(+value)) || (value == "+" && value.indexOf('+') == 0)) {
            this.props.onChange(value);
        }
    };

    render() {
        return (
            <Input
                {...this.props}
                onChange={this.onChange}
                maxLength={25}
            />
        );
    }
}

class inputNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    onChange = value => {
        this.setState({ value });
    };

    render() {
        return (
            <NumericInput value={this.state.value} onChange={this.onChange} placeholder={this.props.placeholder} />
        );
    }
}

export default inputNumber;