import * as React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';
//import $ from "jquery";

import { Home } from '../../pages/home/Home';
import { Contact } from '../../pages/contact/Contact';
import { About } from '../../pages/about/About';
import Header from "../../widgets/common/Header"


export default class MyRouter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuToggle: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menuToggle: !this.state.menuToggle });
  }

  closeMenu() {
    this.setState({ menuToggle: false });
  }

  render() {
    const title = "routing-react-ts-webpack";
    return (
      <HashRouter>
        <div className="module-container">

          <Header headerTitle={title} toggleMenu={this.toggleMenu} />

          <div className={this.state.menuToggle ? "sidebar-menu slideback-left" : "sidebar-menu slide-right"}>
            <div className="list-group panel">
              {/* replace -  to remove warnining error on doubleclick of same link simultneously */}
              <ul className="list-group panel list-group-item menu-list collapsed" onClick={this.toggleMenu} style={{ listStyle: "none", padding: "0" }} >
                <li><Link style={{ width: "100%" }} to={'/home'} replace>Home</Link></li>
                <li><Link style={{ width: "100%" }} to={'/contact'} replace>Contact</Link></li>
                <li><Link style={{ width: "100%" }} to={'/about'} replace>About</Link></li>
              </ul>
            </div>
          </div>

          <div className="contents-container" onClick={this.closeMenu} >
            <Route exact path={'/'} component={Home} />
            <Route path={'/home'} component={Home} />
            <Route path={'/contact'} component={Contact} />
            <Route path={'/about'} component={About} />
            {/* ways to add component in route - component, render, children */}
          </div>

        </div>
      </HashRouter   >
    )
  }
}
