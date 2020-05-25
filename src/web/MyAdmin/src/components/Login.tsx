import React, { Component } from 'react';
import userManager from '../auth/Oidc'
export class Login extends Component {
  componentDidMount() {
    userManager.signinRedirect();
  }
  render() {
    return (<div></div>);
  }
}

