import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ReviewPage from "./pages/ReviewPage";
import ThankyouPage from "./pages/ThankyouPage";
import history from "./../history";
import MemberSignUpPage from "./pages/MemberSignUpPage";
import CustomerShowPage from "./pages/CustomerShowPage";
import CommentsShowPage from "./pages/CommentsShowPage";
import StaffShowPage from "./pages/StaffShowPage";
import AppChoicePage from "./pages/AppChoicePage"
import RosterPage from "./pages/RosterPage";
import CustomerSearchPage from "./pages/CustomerSearchPage";
import NewStaffPage from "./pages/NewStaffPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { connect } from "react-redux";


class App extends Component {
  render() {
    const { token } = this.props;

    return (
      <Router history={history}>
        <div>
          {token && <h4>User Logged In!</h4>}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/forgot_password" component={ForgotPasswordPage} />


            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/customer"
              component={MemberSignUpPage}
            />
            <PrivateRoute exact path="/roster" component={RosterPage} />
            <PrivateRoute exact path="/customers/show" component={CustomerShowPage} />
            <PrivateRoute exact path="/review" component={ReviewPage} />
            <PrivateRoute exact path="/thankyou" component={ThankyouPage} />
            <PrivateRoute exact path="/comments" component={CommentsShowPage} />
            <PrivateRoute exact path="/staff" component={StaffShowPage} />
            <PrivateRoute exact path="/staff/new" component={NewStaffPage} />
            <PrivateRoute exact path ="/app_choice" component={AppChoicePage} />
            <PrivateRoute exact path ="/member_search" component={CustomerSearchPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(App);
