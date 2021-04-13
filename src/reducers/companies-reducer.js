import nairiLogo from '../assets/img/partners/nairi.png';
import ingoLogo from '../assets/img/partners/ingo.png';
import rgsLogo from '../assets/img/partners/rosgosstrax.png';
import rgsLogoSm from '../assets/img/companies/rgs.png';
import ingoLogoSm from '../assets/img/companies/ingo.png';
import nairiLogoSm from '../assets/img/companies/nairi.png';

let initialState = {
    companies: [
        {
            logo: rgsLogo,
            logoSm: rgsLogoSm,
            name: "Ռոսգոսստրախ-Արմենիա",
            desc: "Համակարգը հնարավորություն է տալիս կատարել ԱՊՊԱ-ին առնչվող բոլոր գործողությունները միասնակ",
            price: "14 500 ֏",
        },
        {
            logo: nairiLogo,
            logoSm: nairiLogoSm,
            name: "ՆԱԻՐԻ Ինշուրանս",
            desc: "Համակարգը հնարավորություն է տալիս կատարել ԱՊՊԱ-ին առնչվող բոլոր գործողությունները միասնակ",
            price: "12 400 ֏",
        },
        {
            logo: ingoLogo,
            logoSm: ingoLogoSm,
            name: "ԻՆԳՈ ԱՐՄԵՆԻԱ",
            desc: "Համակարգը հնարավորություն է տալիս կատարել ԱՊՊԱ-ին առնչվող բոլոր գործողությունները միասնակ",
            price: "13 700 ֏",
        },
        {
            logo: rgsLogo,
            logoSm: rgsLogoSm,
            name: "Ռոսգոսստրախ-Արմենիա",
            desc: "Համակարգը հնարավորություն է տալիս կատարել ԱՊՊԱ-ին առնչվող բոլոր գործողությունները միասնակ",
            price: "14 000 ֏",
        },
    ],
}   

const companiesReducer = (state = initialState, action) => {    
    switch(action.type) {
        default: 
            return state;
    }
}


// action creators

export default companiesReducer;