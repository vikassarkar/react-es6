import "../assets/styles/libs.scss";
import "../assets/styles/style.scss";

import React from 'react';
import Store from '../store/Store';
import { storeInitiate, actionWithoutReactRedux } from "../store/action/Actions";

import { Slider } from "./homePage/Slider";
import { ScreenBanner } from "./homePage/ScreenBanner";
import { LightRedirectionBlock } from "./homePage/LightRedirectionBlock";
import { DarkRedirectionBlock } from "./homePage/DarkRedirectionBlock";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userpage: false
    };
    this.toggleUserpage = this.toggleUserpage.bind(this);
  }

  componentWillMount(){
    Store.dispatch(actionWithoutReactRedux("Awsome"));
  }

  toggleUserpage() {
    Store.dispatch(storeInitiate(true))
    this.setState({ userpage: !this.state.userpage })
  }

  render() {
    return (
      <div className="container-fluid no-gutters">
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
      </div >
    );
  }
}