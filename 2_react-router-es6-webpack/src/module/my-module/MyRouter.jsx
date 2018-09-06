import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
//import $ from "jquery";

import { Home } from '../../pages/home/Home';
import { Contact } from '../../pages/contact/Contact';
import { About } from '../../pages/about/About';


export default class MyRouter extends React.Component {

  render() {

    return (
      <BrowserRouter>
      <div>
        <ul style={{ listStyle: "none", padding: "0" }}>
          <li><Link to={'/home'}>Home</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
        <hr />
        <Route exact path={'/'} component={Home} />
        <Route path={'/home'} component={Home} />
        <Route path={'/contact'} component={Contact} />
        <Route path={'/about'} component={About} />
        {/* ways to add component in route - component, render, children */}
      </div>
    </BrowserRouter >
    )
  }
}
