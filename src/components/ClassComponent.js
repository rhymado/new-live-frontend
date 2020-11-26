import React, { Component } from "react";
import { Card } from "react-bootstrap";

// Class Component memiliki state dan props
// State => variabel lokal
// Props => variabel dari parent
export default class classComponent extends Component {
  // Pemanggilan
  // state => this.state
  // props => this.props

  state = {
    name: "",
    timestamp: Date.now(),
  };

  render() {
    const { img, name, brand } = this.props;
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{brand}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
