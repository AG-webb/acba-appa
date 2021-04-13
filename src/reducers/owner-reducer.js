const SET_VALUE = "SET_VALUE";
const SET_DATE_AND_TIME = "SET_DATE_AND_TIME";

let initialState = {
    carInfo: [
        {
            name: "owner",
            title: "ԱԱՀ",
            value: "Պետրոսյան Զառա Արմենի",
        },
        {
            name: "passportNumber",
            title: "Անձը հաստատող փաստաթուղթ",
            value: null,
        },
        {
            name: "carNumber",
            title: "Հաշվառման համարանիշ",
            value: null,
        },
        {
            name: "brand",
            title: "Մակնիշ",
            value: "BMW",
        },
        {
            name: "car",
            title: "Տիպար",
            value: "3 Series 3.0L",
        },
        {
            name: "engine",
            title: "Շարժիչի հզորություն",
            value: "231",
        },
        {
            name: "usagePurpose",
            title: "Շահագործման նպատակ",
            value: "Անձնական",
        },
        {
            name: "contractEnd",
            title: "Գործող պայմանագրի ավարտ",
            value: {
                date: "23/07/2019",
                time: "14:25",
            },
        },
        {
            name: "number",
            title: "Ա/մ նույնականացման համար",
            value: "285330",
        },
        {
            name: "info",
            title: "ԲՄ տեղեկատվություն",
            value: "14",
        },
        {
            name: "email",
            title: "Էլ փոստի հասցե",
            value: null,
        },
        {
            name: "phoneNumber",
            title: "Հեռախոսահամար",
            value: null,
        },
        {
            name: "startDate",
            title: "Սկիզբ",
            value: null
        },
        {
            name: "endDate",
            title: "Ավարտ",
            value: null,
        },
    ]
}; 

const ownerReducer = (state = initialState, action) => {    
    switch(action.type) {
        case SET_VALUE: 
            return {
                ...state,
                carInfo: [...state.carInfo.map((item) => {
                    if(item.name == action.name) {
                        return {...item, value: action.value}
                    } else {
                        return {...item}
                    }
                })],
            };
        case SET_DATE_AND_TIME: 
            return {
                ...state,
                carInfo: [...state.carInfo.map((item) => {
                    if(item.name == action.name) {
                        return {
                            ...item,
                            value: {
                                date: action.date,
                                time: action.time,
                            }
                        }
                    } else {
                        return {...item}
                    }
                })],
            };
        default: 
            return state;
    }
}


// action creators
export const setValue = (name, value) => ({
    type: SET_VALUE,
    name,
    value,
}); 
export const setDateAndTime = (name, date, time) => ({
    type: SET_DATE_AND_TIME,
    name,
    date,
    time,
}); 

export default ownerReducer;