import React from 'react';
import { Radio } from 'antd';
import './RadioItem.scss';

class RadioItem extends React.Component {
    render() {
        return (
            <Radio value={this.props.value}>
                <div className="radio-item">
                    <div className="radio-item__logo">
                        <img src={this.props.logo} alt="company logo"/>
                    </div>
                    <div className="radio-item__name text">{this.props.name}</div>
                    <div className="radio-item__price">{this.props.price}</div>
                </div>
            </Radio> 
        );
    }
}

export default RadioItem;