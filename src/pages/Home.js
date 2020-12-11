import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Product from "../components/Product";
import FunctionComponent from "../components/FunctionComponent";
import Counter from "../components/Counter";

class Home extends Component {
  state = {
    title: "Popular",
  };

  render() {
    const { history, counter } = this.props;
    // console.log("Home", match, location, history);
    return (
      <>
        <Product title={this.state.title} />
        <FunctionComponent title={counter.counterNumber} />
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
        <Counter />
      </>
    );
  }
}

const mapStateToProps = ({ counter }) => {
  return {
    // key => nama props
    // value => state apa di store yang mau dimasukkan
    counter, // counter : counter
  };
};
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     handleLogin: () => {
//       dispatch()
//     }
//   }
// };
export default connect(mapStateToProps)(Home);
