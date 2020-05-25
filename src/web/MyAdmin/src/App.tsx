import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router'
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Product from './components/Product';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import Callback from './components/Callback';
import { history, configureStore } from './reduxs/index';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import { ConnectedRouter } from 'connected-react-router';
import userManager from './auth/Oidc';
import AppContext, { services } from './AppContext';
const store = configureStore();
export default class App extends Component {
  static displayName = App.name;

  render() {
    const {
      location: { pathname }
    } = history;
    return (
      <Provider store={store}>
        <OidcProvider userManager={userManager} store={store}>
          <ConnectedRouter history={history}>
            <AppContext.Provider value={services}>
              <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/products' component={Product} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/logout' component={Logout} />
                <Route path="/callback" component={Callback} />
              </Layout>
            </AppContext.Provider>
          </ConnectedRouter>
        </OidcProvider>
      </Provider>
    );
  }
}
