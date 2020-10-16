import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './layout/Home';
import Profile from './layout/Profile';
import Login from './layout/Login';
import SignUp from './layout/Signup';
import Edit from './layout/Edit';
import OneClientOutgoing from './layout/OneClientOutGoing';
import GetOneClient from './layout/GetOneClient';
import CreateProduct from './layout/CreateProduct';
import BuyProduct from './layout/BuyProduct';
import { AuthProvider } from './auth/AuthContext';
import { PrivateRoute } from './auth/PrivateRoute';

function Routes() {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute path="/edit" component={Edit} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/v1/create-product" component={CreateProduct} />
        <Route exact path="/v1/buy-product" component={BuyProduct} />
        <Route exact path="/v1/get-one-client-outgoing" component={OneClientOutgoing} />
        <Route exact path="/v1/get-one-user" component={GetOneClient} />
      </Router>
    </AuthProvider>
  );
}

export default Routes;
