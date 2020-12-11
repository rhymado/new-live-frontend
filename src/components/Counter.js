import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import {
  addCounterCreator,
  subCounterCreator,
} from "../redux/actionCreators/Counter";

class Counter extends Component {
  render() {
    const { counterNumber } = this.props.counter;
    console.log(this.props.counter);
    return (
      <div className="d-flex justify-content-around align-items-stretch p-2 m-2 bg-success">
        <Button onClick={() => this.props.subCounter(counterNumber)}>-</Button>
        <p
          style={{
            color: "whitesmoke",
            fontSize: "2rem",
          }}
        >
          {counterNumber}
        </p>
        <Button onClick={this.props.addCounter}>+</Button>
      </div>
    );
  }
}

const mapStateToProps = ({ counter }) => {
  // state => counter, products
  return {
    // key => nama props
    // value => state apa di store yang mau dimasukkan
    counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  // key => nama props berisi fungsi dispatch
  // value => fungsi dispatch
  // console.log("mdtp", this.props.counter);
  return {
    addCounter: () => {
      dispatch(addCounterCreator());
    },
    subCounter: (counter) => {
      if (counter !== 0) {
        dispatch(subCounterCreator());
      }
    },
  };
};

const CounterWithRedux = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterWithRedux;
