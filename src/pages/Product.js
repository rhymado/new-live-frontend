import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
// import axios from "axios";

import Navbar from "../components/NavigationBar";
import { getSingleProduct } from "../redux/actionCreators/Products";
// const url = "http://localhost:8000/product/";

class Product extends Component {
  // state = {
  //   msg: "Belum Berubah",
  // };

  // getSingleProduct = () => {
  //   const { match } = this.props;
  //   axios
  //     .get(process.env.REACT_APP_BASEURL + match.params.id)
  //     .then((result) => {
  //       console.log(result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  getSingleProductDispatch = (id) => {
    this.props.dispatch(getSingleProduct(id));
  };

  handlePrevious = () => {
    const newId = Number(this.props.match.params.id) - 1;
    this.props.history.push("/product/" + newId);
  };

  handleNext = () => {
    const newId = Number(this.props.match.params.id) + 1;
    this.props.history.push("/product/" + newId);
  };

  // handleStateChange = () => {
  //   this.setState({
  //     msg: "Sudah Berubah",
  //   });
  // };

  componentDidMount = () => {
    // this.getSingleProduct();\
    const { match } = this.props;
    this.getSingleProductDispatch(match.params.id);
  };

  componentDidUpdate = (prevProps) => {
    // console.log(prevProps, this.props);
    // console.log(prevState, this.state);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      console.log("ID Product berubah");
      this.getSingleProductDispatch(this.props.match.params.id);
      // this.getSingleProduct();
    }
    // if (prevState !== this.state) {
    //   console.log("State Berubah");
    //   if (prevState.msg !== this.state.msg) {
    //     console.log("Pesan Berubah");
    //   }
    // }
  };

  render() {
    // console.log(process.env.REACT_APP_NAME);
    const { match } = this.props;
    // console.log(products);
    return (
      <div>
        <Navbar />
        <p>Halaman Single Product</p>
        <Button onClick={this.handlePrevious}>Prev Item</Button>
        <Button onClick={this.handleNext}>Next Item</Button>
        {/* <div>
          <Button onClick={this.handleStateChange}>Ubah State</Button>
        </div> */}
        {match.params.id === "4" ? (
          <Button>4</Button>
        ) : (
          <p>{match.params.id}</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};

export default connect(mapStateToProps)(Product);
