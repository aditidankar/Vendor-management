import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import UserLogin from './components/UserLogin';
import Sourcingaction from './components/Sourcing/action';
import VendorManagementapprove from './components/VendorManagement/approve';
import './App.css';

class App extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {  
    return (
      <div>
      <Switch>
      <Route exact path='/' render={() => (<Login username={this.state.username} password={this.state.password}/>)}/>
      </Switch>
        <Switch>
           <Route path='/UserLogin' render={() => (<UserLogin/>)}/>
        </Switch>
        <Switch>
           <Route path='/Sourcing/action' render={() => (<Sourcingaction/>)}/>
        </Switch>
        <Switch>
           <Route path='/VendorManagement/approve' render={() => (<VendorManagementapprove/>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
