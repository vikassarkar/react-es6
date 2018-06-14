import "../assets/styles/libs.scss";
import "../assets/styles/style.scss";

import React from 'react';
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import { storeInitiate } from "../store/action/Actions";

import { Slider } from "./homePage/Slider";
import { ScreenBanner } from "./homePage/ScreenBanner";
import { LightRedirectionBlock } from "./homePage/LightRedirectionBlock";
import { DarkRedirectionBlock } from "./homePage/DarkRedirectionBlock";
import { Header } from "./homePage/Header";
import { Footer } from "./homePage/Footer";
import UserDetails from "./userDetails/index";

class AppHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userpage: false
    };
    this.toggleUserpage = this.toggleUserpage.bind(this);
    this.goToHomePage = this.goToHomePage.bind(this);
  }
  goToHomePage() {
    this.props.storeInitiateAction(true);
    this.setState({ userpage: false })
  }

  toggleUserpage() {
    this.props.storeInitiateAction(true);
    this.setState({ userpage: !this.state.userpage })
  }

  render() {
    return (
      <div className="container-fluid no-gutters">
        <Header toggleUserpage={this.toggleUserpage} goToHomePage={this.goToHomePage} />
        {!this.state.userpage &&
          <div className="home-banner">
            <ScreenBanner toggleUserpage={this.toggleUserpage} />
            <div className="xSpacer xb"></div>
            <LightRedirectionBlock toggleUserpage={this.toggleUserpage} />
            <div className="xSpacer xb"></div>
            <Slider />
            <div className="xSpacer xb"></div>
            <DarkRedirectionBlock toggleUserpage={this.toggleUserpage} />
            <div className="xSpacer xb"></div>
            <div className="container">
            </div>
            <div className="xSpacer xb"></div>
          </div>
        }
        {this.state.userpage &&
          <UserDetails toggleUserpage={this.toggleUserpage} />
        }
        <Footer />
      </div >
    );
  }
}

const App = connect(
  (state) => {
    return { DataReducer: state['DataReducer'] };
  }, // Map store state to props
  (dispatch) => {
    return {
      storeInitiateAction: (initiate) => {
        dispatch(storeInitiate(initiate));
      }
    };// Map store actions to props
  })(AppHandler);

export default App;