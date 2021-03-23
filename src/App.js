import React from 'react';
import { Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.scss';
import Home from './layouts/Home/Home';
import Steps from './layouts/Steps/Steps';

class App extends React.Component {
    render() {
        return (
            <>
                <Route path="/" exact={true} render={ () => <Home />  } />
                <Route path="/steps" render={ () => <Steps />  } />
            </>
        )
    }
}

export default App;