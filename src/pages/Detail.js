import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
// import axios from "axios";
import { connect } from "react-redux";

import { getProductsCreator } from "../redux/actionCreators/Products";

// const getUrl = "http://localhost:8000/products";

class Detail extends Component {
  // state = {
  //   products: {},
  // };

  getAllProductsDispatch = () => {
    this.props.dispatch(getProductsCreator());
  };

  // getAllProducts = () => {
  //   axios
  //     .get(getUrl)
  //     .then(({ data }) => {
  //       this.setState({
  //         products: data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  componentDidMount = () => {
    // this.getAllProducts();
    this.getAllProductsDispatch();
  };

  render() {
    const { products } = this.props;
    // const { location } = this.props;
    // console.log("Detail", match, location, history);
    // const query = location.search.split("?")[1].split("&");
    // console.log(query);
    // const baseUrl = "http://localhost:8000";
    // const url = baseUrl + location.search;
    // console.log(products);
    return (
      <>
        <p>Halaman Detail Product</p>
        <div>
          <Button className="m-2" onClick={this.getAllProductsDispatch}>
            Get All Products
          </Button>
          <Button className="m-2">Get Single Products</Button>
        </div>
        {products.isFulfilled &&
          products.productsData.data.products.map(
            ({ product_name, product_description, product_price, id }) => {
              return (
                <Card key={id}>
                  <Card.Body>
                    <Card.Title>{product_name}</Card.Title>
                    <Card.Text>{product_price}</Card.Text>
                    <Card.Text>{product_description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            }
          )}
        {/* {this.state.product[0] && (
          <ProductName
            name={this.state.product[0].product_name}
            brand={this.state.product[0].product_name}
          />
        )} */}
      </>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};

export default connect(mapStateToProps)(Detail);
