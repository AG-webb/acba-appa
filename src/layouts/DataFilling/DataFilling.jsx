import React from 'react';
import DataItem from '../../components/DataItem/DataItem';
import StepCount from '../../components/StepCount/StepCount';
import StepsGrid from '../../components/StepsGrid/StepsGrid';
import './DataFilling.scss';
import DataForm from './DataForm';



class DataFilling extends React.Component {
    render() {
        return (
            <StepsGrid 
                title={ 
                    <>
                        <StepCount count={ 2 }/>
                        <div className="text">
                            Խնդրում ենք ստուգել
                            ստորև տեղեկատվությունը և
                            լրացնել ստորև դաշտերը
                        </div>
                    </>
                }
                topContent={ <CarDataComponent /> }
                desc={
                    <div className="text">
                        Խնդրում ենք լրացնել ստորև դաշտերը
                    </div>
                }
                bottomContent={ <DataForm /> }
            />
        );
    }
}

let CarDataComponent = () => {
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
        <div className="data-items">
            { carData.map( (data, index) => <DataItem key={index} title={data.title} value={data.value}/> ) }
        </div>
    );
}

export default DataFilling;