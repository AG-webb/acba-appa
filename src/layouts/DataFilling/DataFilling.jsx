import React from 'react';
import DataItem from '../../components/DataItem/DataItem';
import StepCount from '../../components/StepCount/StepCount';
import StepsFooter from '../../components/StepsFooter/StepsFooter';
import './DataFilling.scss';
import DataForm from './DataForm';


class DataFilling extends React.Component {

    render() {
        let carData = [
            {
                title: "Հաշվառման համարանիշ",
                value: "10TA033",
            },
            {
                title: "Մակնիշ",
                value: "NISSAN",
            },
            {
                title: "Տիպար",
                value: "TIDA 1.5",
            },
            {
                title: "Շարժիչի հզորություն",
                value: "109",
            },
            {
                title: "Շահագործման նպատակ",
                value: "Անձնական",
            },
            {
                title: "Գործող պայմանագրի ավարտ",
                value: {
                    date: "23/07/2019",
                    time: "14:25",
                }
            },
            {
                title: "Ա/մ նույնականացման համար",
                value: "285330",
            },
            {
                title: "ԲՄ տեղեկատվություն",
                value: "14",
            },
            {
                title: "Սկիզբ",
                value: {
                    date: "27/05/2019 ",
                    time: "12։30",
                }
            },
            {
                title: "Ավարտ",
                value: "12/08/2019",
            },
        ];

        return (
            <div className="steps-grid">
                <div className="row expanded align-center lg-align-left">
                    <div className="column sm-14 lg-5 xl-4">
                        <div className="steps-grid__title steps-grid__left-side">
                            <StepCount count={2}/>
                            <div className="text">
                                Խնդրում ենք ստուգել
                                ստորև տեղեկատվությունը և
                                լրացնել ստորև դաշտերը
                            </div>
                        </div>
                    </div>
                    <div className="column sm-14 md-12 lg-9 xxxl-8">
                        <div className="steps-grid__top-content">
                            <div className="data-items">
                                {
                                    carData.map( (data, index) => <DataItem key={index} title={data.title} value={data.value}/> )  
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row expanded align-center lg-align-left">
                    <div className="column sm-14 md-12 lg-5 xl-4">
                        <div className="steps-grid__desc steps-grid__left-side">
                            <div className="text">
                                Խնդրում ենք լրացնել ստորև դաշտերը
                            </div>
                        </div>
                    </div>
                    <div className="column sm-14 md-12 lg-9 xxxl-8">
                        <div className="steps-grid__bottom-content">
                            <DataForm />
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

export default DataFilling;