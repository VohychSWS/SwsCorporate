import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.scss';

import MainPageComponent from './components/mainPage/main.component';
import ClientComponent from "./components/clients/clients.component";
import WorksComponent from "./components/works/works.component";
import OneWorkComponent from './components/oneWork/oneWork.component';
import OneServiceComponent from './components/oneService/OneService.component';
import NotFound from './components/NotFound';

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            gotServices: false,
            gotClientsReuse: false,
            gotWorksReuse: false,
            gotAboutHome: false,
        }

    }


    mainPageGotData = (stateItem, value) => {
        this.setState({
            [stateItem]: value,

        });
    };


    render() {

        // console.log(this.state);
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route path="/" exact render={() => (<MainPageComponent dataStatus={this.state} updateData={this.mainPageGotData}/>)}/>
                        <Route path="/clients" exact component={ClientComponent}/>
                        <Route path="/portfolio" exact component={WorksComponent}/>
                        <Route path="/work/:name" exact component={OneWorkComponent}/>
                        <Route path="/services/:name" exact component={OneServiceComponent}/>
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;
