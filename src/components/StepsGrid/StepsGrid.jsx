import React from 'react';
import './StepsGrid.scss';
import StepsFooter from '../../components/StepsFooter/StepsFooter';

class StepsGrid extends React.Component {
    render() {
        return (
            <div className="steps-grid">
                <div className="row expanded align-center lg-align-left">
                    <div className="column sm-14 lg-5 xl-4">
                        <div className="steps-grid__title steps-grid__left-side">
                            {this.props.title}
                        </div>
                    </div>
                    <div className="column sm-14 md-12 lg-9 xxxl-8">
                        <div className="steps-grid__top-content">
                            {this.props.topContent}
                        </div>
                    </div>
                </div>
                {
                    this.props.desc || this.props.bottomContent ?

                        <div className="row expanded align-center lg-align-left">
                            <div className="column sm-14 md-12 lg-5 xl-4">
                                <div className="steps-grid__desc steps-grid__left-side">
                                    {this.props.desc}
                                </div>
                            </div>
                            <div className="column sm-14 md-12 lg-9 xxxl-8">
                                <div className="steps-grid__bottom-content">
                                    {this.props.bottomContent}
                                </div>
                            </div>
                        </div> : null
                }

                <div className="row expanded">
                    <div className="column sm-14 xxl-11 xxxl-12">
                        <StepsFooter />
                    </div>
                </div>
            </div>
        );
    }
}

export default StepsGrid;