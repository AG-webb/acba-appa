import React from 'react';
import './DataItem.scss';


class DataItem extends React.Component {
    valueCheker() {
        let valuesComb = "";
        let value = this.props.value;

        if(typeof value == "object") {
            for(let key in value) {
                valuesComb = valuesComb + value[key] + " ";
            }

            return valuesComb;
        } else {
            return value;
        }
    }

    render() {
        return (
            <div className="data-item">
                <div className="data-item__wrap">
                    <div className="data-item__title">{this.props.title}</div>
                    <div className="data-item__value">{this.valueCheker()}</div>
                </div>
            </div>
        );
    }
}

export default DataItem;