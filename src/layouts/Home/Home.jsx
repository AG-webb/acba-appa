import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Hedaer/Hedaer';
import Partners from '../../components/Partners/Partners';
import Slider from '../../components/Slider/Slider';
import UsefulDocs from '../../components/UsefulDocs/UsefulDocs';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <main className="main">
                    <Slider />
                    <Partners />
                    <UsefulDocs />
                </main>
                <Footer />
            </>
        );
    }
}

export default Home;