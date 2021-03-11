import React from 'react';
import './Partners.scss';
import partnersIcon from '../../assets/img/icons/partners.svg';
import Partner from './Partner/Partner';
import partnerLogo1 from '../../assets/img/partners/sil.png';
import partnerLogo2 from '../../assets/img/partners/nairi.png';
import partnerLogo3 from '../../assets/img/partners/ingo.png';
import partnerLogo4 from '../../assets/img/partners/rosgosstrax.png';
import pen from '../../assets/img/icons/pen.svg';
import Button from '../Button/Button';

class Partners extends React.Component {

    render() {
        let partners = [
            {
                name: "ՍԻԼ ԻՆՇՈՒՐԱՆՍ",
                logo: partnerLogo1,
                desc: "Համակարգը հնարավորություն է տալիս կատարել ԱՊՊԱ-ին առնչվող բոլոր գործողությունները միասնակ",
            },
            {
                name: "ՆԱԻՐԻ ԻՆՇՈՒՐԱՆՍ",
                logo: partnerLogo2,
                desc: "Համակարգը հնարավորություն է տալիս կատարել ԱՊՊԱ-ին առնչվող բոլոր գործողությունները միասնակ",
            },
            {
                name: "ԻՆԳՈ ԱՐՄԵՆԻԱ",
                logo: partnerLogo3,
                desc: "Համակարգը հնարավորություն է տալիս կատարել ԱՊՊԱ-ին առնչվող բոլոր գործողությունները միասնակ",
            },
            {
                name: "Ռոսգոսստրախ-Արմենիա",
                logo: partnerLogo4,
                desc: "Համակարգը հնարավորություն է տալիս կատարել ԱՊՊԱ-ին առնչվող բոլոր գործողությունները միասնակ",
            }
        ];

        return (
            <div className="partners">
                <div className="dots-decore dots-decore_orange"></div>
                <div className="dots-decore dots-decore_green"></div>
                <div className="row">
                    <div className="column sm-14">
                        <div className="partners__heading">
                            <div className="partners__icon">
                                <img src={partnersIcon} alt="partners"/>
                            </div>
                            <div className="partners__title h2-font">
                                ԳործԸՆԿԵՐՆԵՐ
                            </div>
                        </div>
                        <div className="partners__list">
                            {
                                partners.map((partner, index) => {
                                    return <Partner key={index} name={partner.name} logo={partner.logo} desc={partner.desc}/>
                                })
                            }
                        </div>
                        <div className="inline-btn">
                            <div className="inline-btn__wrap">
                                <Button icon={pen} text={`ԿՆՔԵԼ ԱՊՊԱ`} bg={"green"} link={"/steps"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        );
    }
}

export default Partners;