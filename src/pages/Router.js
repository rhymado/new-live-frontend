import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import PrivateRoute from "../components/PrivateRoute";
import Home from "./Home";
import Detail from "./Detail";
import Product from "./Product";
import EditProduct from "./EditProduct";
import Topics from "./Topics";
import Login from "./Login";

import store from "../redux/store";

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/profile" component={EditProduct} />
          <Route path="/topics" component={Topics} />
          <Route path="/product/:id" component={Product} />
          <Route path="/products" component={Detail} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected">
            <div>
              <p>Protected Page</p>
            </div>
          </PrivateRoute>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

// URL/
// URL/detail
