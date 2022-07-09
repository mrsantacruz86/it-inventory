import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import PageNotFound from './PageNotFound';
import TestPage from './TestPage';
import HNavbar from './HNavbar';
import PrivateRoute from './PrivateRoute';
import history from '../history';
import FindingsReport from './FindingsReport';
import {
  HouseAuditsList,
  HouseAuditGeneralReport,
  HouseAuditShow,
  HouseAuditCreate,
  HouseAuditEdit,
  HouseAuditDelete
} from './HouseAudits';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <HNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={SignUpPage} />
          {/* House audit Routes */}
          <PrivateRoute exact path="/houseaudits" component={HouseAuditsList} />
          <PrivateRoute
            exact
            path="/houseaudits/generalreport"
            component={HouseAuditGeneralReport}
          />
          <PrivateRoute exact path="/houseaudits/findingsreport" component={FindingsReport} />
          <PrivateRoute exact path="/houseaudits/new" component={HouseAuditCreate} />
          <PrivateRoute exact path="/houseaudits/edit/:id" component={HouseAuditEdit} />
          <PrivateRoute exact path="/houseaudits/delete/:id" component={HouseAuditDelete} />
          {/* this should be always the last route so it does not interfere with the /new */}
          <Route exact path="/houseaudits/show/:id" component={HouseAuditShow} />

          <Route exact path="/testpage" component={TestPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
