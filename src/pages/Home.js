import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Product from "../components/Product";
import FunctionComponent from "../components/FunctionComponent";

export default class Home extends Component {
  state = {
    title: "Popular",
  };
  render() {
    const { match, location, history } = this.props;
    console.log("Home", match, location, history);
    return (
      <>
        <Product title={this.state.title} />
        <FunctionComponent title="Selamat Datang" />
        <Button
          onClick={() => {
            if (this.state.title === "Popular") {
              this.setState({
                title: "New",
              });
            } else {
              this.setState({
                title: "Popular",
              });
            }
          }}
        >
          Change Title
        </Button>
        <Link
          to={{
            pathname: "/detail",
            state: this.state,
          }}
        >
          <Button>Go To Detail</Button>
        </Link>
        <Button
          onClick={() => {
            // do something
            history.push({
              pathname: "/detail",
              state: this.state,
            });
          }}
        >
          Go To Detail
        </Button>
      </>
    );
  }
}
