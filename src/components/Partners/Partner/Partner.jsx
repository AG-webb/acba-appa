import React from 'react';
import './Partner.scss';

class Partner extends React.Component {
    render() {
        return (
            <div className="partner">
                <div className="partner__wrap"> 
                    <div className="partner__heading">
                        <div className="partner__name">
                            {this.props.name}
                        </div>    
                        <div className="partner__logo">
                            <img src={this.props.logo} alt="partner logo"/>
                        </div>    
                    </div> 
                    <div className="partner__desc text">
                        {this.props.desc}
                    </div>
                </div>
            </div>        
        );
    }
}

export default Partner;