import "../assets/styles/libs.scss";
import "../assets/styles/style.scss";

import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import Store from '../store/Store';
import { storeInitiate, actionWithoutReactRedux, setData } from "../store/action/Actions";

import { Slider } from "./homePage/Slider";
import { ScreenBanner } from "./homePage/ScreenBanner";
import { LightRedirectionBlock } from "./homePage/LightRedirectionBlock";
import { DarkRedirectionBlock } from "./homePage/DarkRedirectionBlock";

class AppHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userpage: false
    };
    this.toggleUserpage = this.toggleUserpage.bind(this);
  }

  componentWillMount(){
    let component = this;
    // Store.dispatch(actionWithoutReactRedux("Awsome"));
    component.getJSONAsync().then((response) => {
        console.log(response)
        component.setState({ userData: response.data });
        component.props.setDataAction(response.data);
    });
  }

  async getJSONAsync() {
    let json = await axios.get('../mocks/ReactTask.json');
    return json;
  }
  toggleUserpage() {
    this.props.storeInitiateAction(true);
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
        </div>
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
    },
    setDataAction: (data) => {
      dispatch(setData(data));
    }
  };// Map store actions to props
})(AppHandler);

export default App;