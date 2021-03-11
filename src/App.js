import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.scss';
import Home from './layouts/Home/Home';
import Steps from './layouts/Steps/Steps';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact={true} render={ () => <Home />  } />
                <Route path="/steps" render={ () => <Steps />  } />
            </BrowserRouter>
        )
    }
}

export default App;