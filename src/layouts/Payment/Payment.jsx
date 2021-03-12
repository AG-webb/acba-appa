import React from 'react';
import './Payment.scss';
import DataItem from '../../components/DataItem/DataItem';
import StepCount from '../../components/StepCount/StepCount';
import CompaniesForm from './CompaniesForm';
import StepsGrid from '../../components/StepsGrid/StepsGrid';

class Payment extends React.Component {
    render() {
        let owner = {
            name: "Զառա Պետրոսյան",
        }

        return (
            <StepsGrid 
                title={ 
                    <>
                        <StepCount count={ 3 }/>
                        <div className="text">
                            ՀԱՐԳԵԼԻ <span>{ owner.name }</span>՝ Խնդրում ենք ստուգել
                            ստորև տեղեկատվությունը և անցնել վճարման
                        </div>
                    </>
                }
                topContent={ <CarDataComponent /> }  
                desc={
                    <div className="text">
                        Խնդրում ենք ընտրել Ապահովագրական ընկերությունը `
                    </div>
                }
                bottomContent={
                    <>
                        <span className="text">Գումարը նշված է 5%-ով նվազեցված</span>
                        <CompaniesForm />
                    </>
                }
            />
        );
    }
}

let CarDataComponent = () => {
    let carData = [
        {
            title: "ԱԱՀ",
            value: "Պետրոսյան Զառա Արմենի",
        },
        {
            title: "Անձը հաստատող փաստաթուղթ",
            value: "AS0357787",
        },
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
            title: "Էլ փոստի հասցե",
            value: "zarapetrosyan@gmail.com",
        },
        {
            title: "Հեռախոսահամար",
            value: "+374 93 50 50 50",
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

export default Payment;