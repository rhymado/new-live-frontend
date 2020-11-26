import React, { Component } from "react";
import axios from "axios";

// const url = "http://localhost:8000/product/";

export default class Product extends Component {
  getSingleProduct = () => {
    const { match } = this.props;
    axios
      .get(process.env.REACT_APP_BASEURL + match.params.id)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getSingleProduct();
  };

  render() {
    console.log(process.env.REACT_APP_NAME);
    return (
      <div>
        <p>Halaman Single Product</p>
      </div>
    );
  }
}
