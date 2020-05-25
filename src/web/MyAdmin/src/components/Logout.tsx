import React, { Component } from 'react';
import { userSignOut } from '../reduxs/actions/Auth'
import store from '../reduxs/index';
export class Logout extends Component {
  componentDidMount() {
    store.dispatch<any>(userSignOut());
  }
  render() {
    return (<div></div>);
  }
}

