import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Actions from './components/Actions/Actions';
import ProcessPurchase from './components/Actions/ProcessPurchase';
import ProcessReturn from './components/Actions/ProcessReturn';
import PurchaseInformation from './components/Purchase/PurchaseInformation';

class App extends React.Component {
  state = {
    isUserAuthenticated: null,
  }
  handleAuthentication = (value /*this should be removed*/) => {
    const isUserAuthenticated = value;
    this.setState({isUserAuthenticated});
  }
  handleTokenVerification = (testVal) => {
    const token = testVal;
    if(!token) this.setState({isUserAuthenticated: false});
  }
  componentDidMount(){
    this.handleTokenVerification(true);
    this.handleAuthentication(true);
  }
  render(){
    return(
      <Router>
          <div id="App">
            <header>
              {
                this.state.isUserAuthenticated
                  ? <Navigation />
                  : null
              }
              hello
            </header>
            <main>
              <div id="spacer"/>
              <Switch>
                <Route exact path="/" render={ 
                  this.state.isUserAuthenticated
                    ? () => <Redirect to="/dashboard" />
                    : () => <Home handleAuthentication={this.handleAuthentication}/>
                }/>
                <Route exact path="/dashboard" render={
                  () => <Dashboard isUserAuthenticated={this.state.isUserAuthenticated}/>
                }/>
                <Route exact path="/actions" render={
                  () => <Actions isUserAuthenticated={this.state.isUserAuthenticated}/>
                }/>
                <Route exact path="/actions/process-purchase" render={
                  () => <ProcessPurchase 
                          isUserAuthenticated={this.state.isUserAuthenticated}
                          handleTokenVerification={this.handleTokenVerification}
                        />
                }/>
                <Route exact path="/actions/process-return" render={
                  () => <ProcessReturn 
                          isUserAuthenticated={this.state.isUserAuthenticated}
                          handleTokenVerification={this.handleTokenVerification}
                        />
                }/>
                <Route exact path="/purchase-information/:id" render={
                  () => <PurchaseInformation
                          isUserAuthenticated={this.state.isUserAuthenticated}
                          handleTokenVerification={this.handleTokenVerification}
                        />
                }
                />
              </Switch>
            </main>
          </div>
      </Router>
    )
  }
}

export default App;
