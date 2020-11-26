import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import AxiosPage from "./Axios";
import Product from "./Product";

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/products" component={AxiosPage} />
      <Route path="/product/:id" component={Product} />
    </BrowserRouter>
  );
}

// URL/
// URL/detail
