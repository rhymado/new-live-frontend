import React, { Component } from "react";
import { Button } from "react-bootstrap";

import ClassComponent from "./ClassComponent";

export default class Product extends Component {
  // Lifecycle
  // Constructor
  constructor() {
    super();
    this.state = {
      data: [
        {
          img:
            "https://s3-alpha-sig.figma.com/img/f2c7/fd0b/307d95806ea47cf954a9dadb637c8225?Expires=1607299200&Signature=L~7y2NsHI8E0nO23lZ1-NbP66BfbpAFie1Ud8-4wMXhdPrqTTu9WXstIJA2IuT~H1U7dGYJSCjmNdXTkwsYX7R1fUruXMt5iBk5i09DQIis-tw66CMWpBRkm0fWXtHtwjFz0aAEJ1Tt1VqZF7z-18XnH5bgCQAstB-eNQPB1qec8fTsUcdVkfGIG9bTqfUPfrwl-uUl~GUS-Mn2AzvDKMYYNrUjuZ1tyhoFJomln7OXRGLO9AomIao7UAaCerlz8aPkLXxPZePBkMsWN-PqLrbebgFdm5pz9NxZcuXhcreCFIOYM-He64s3Fe1fncfTsW8BOKuTFOf9UjtDhEe5WgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          name: "Baju Koko Pria",
          brand: "Zalora Cloth",
        },
        {
          img:
            "https://s3-alpha-sig.figma.com/img/f7d2/c4fa/7f2d62af5d36bfc5853b20faa7ee8c79?Expires=1607299200&Signature=F5mhxrbmIjqbmxNCQF64ANxGUjMeWYlde7BfzhnAWR7nBzZGrFBED9FOafG~UNCcBdfhaIuN9RfgrBHwzh8sOkGASjXJq9LaO3UwU8q9BniHgXG3GeCluyTpmuLlp-Hnm58D4T-psH56BPPOzQrzvFD5QccXnnd1r292TWRJbZlchygY4I8J9p-72J8cywFq-sK3kE~~BeXhs1dSaNCKUfMQAEzODsGT9iN5taCnnsOMLHd89mQ3BAbWK-l8UebtrjcnkYF6hkSN4OJ~hPafxLzLnn005nquSB5CFPRxvTm0NJq7FiyOYWk8oktO2BELGHgQB3R1aLR4bzdW-zh1~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          name: "Baju Koko Pria Dewasa",
          brand: "Tokopedia",
        },
      ],
    };
  }
  // ComponentDidMount
  // componentWillMount(){}
  componentDidMount = () => {
    console.log("did Mount", new Date(Date.now()).getMilliseconds());
  };

  // ComponentDidUpdate
  // Ketika tepat setelah selesai update
  // setState
  // new Props
  // forceUpdate
  // Update => Re-render

  componentDidUpdate = (prevProps, prevState) => {
    console.log("did Mount", new Date(Date.now()).getMilliseconds());
    if (prevProps.title !== this.props.title) {
      console.log("Title sudah berubah");
    }
    if (prevState.data !== this.state.data) {
      console.log("Data sudah berubah");
    }
  };

  render() {
    const { title } = this.props;
    console.log("render", new Date(Date.now()).getMilliseconds());
    const newItem = [
      {
        img:
          "https://s3-alpha-sig.figma.com/img/53a0/1ccb/2a1aae624033dccdef99e3a2279b99d3?Expires=1607299200&Signature=ZADjWYxnPBGkwfMCLOsl0R8rvHzU~5dA8L3eQ-WBEC~NcoWGBanGZU8Qmc0gquy9JOautp6yeAJwtJWum75XDa-0g0p~14XMvmBjwG9WyKBG60BOJCJ9fUVIv2IFanUxZqdlAYKA34JL1J--uwXLBOoMmpbALNevKI3sW0PgElzgBsoz74u~O45rHSAULlzdYENhcsBi-r5DsFf1f3E5iZSSbZqVY-9hpQnssUEunTnGxveG4MUePMie30W1vd-dyPMOUnT6Lxx1GUKYT~qXIspR8Y02wxe19HkckoeAehwCdegHGYCqVjsVB3aS6~lQ-R5Iv2RNOI~nXQ6M0Iq-eQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Baju Koko Lebaran",
        brand: "Shopee",
      },
      {
        img:
          "https://s3-alpha-sig.figma.com/img/f1ef/f107/357f62b3b1f81e5f4b7695aee33c516c?Expires=1607299200&Signature=Mw7svgdL01SwHfB9khwnFsaPY2DA4i4ln8a1~ZIX7uvT1PW2B7O7RAvhw~3UunQIVBl~WYMnK0CS~pGeFhB4rqFwUaAa1USv3H5dLzh6Gde2C11Ior7JNTKJhPD~CqCq2dXYyZuD9svs8wng8gtEYubVyNeWwhEo~T5LSoy8BAX8RrDVdHb-K0HtG80DqnBnBQoIaSjBJ5BTBB1sncVVpQPZplKxph9GW7z8V5jK94Z5~3LfTEzpvzlHGWg4SMMstiPpPMckRo5ZUCXRBCLqEGFLbrvnSHGkNIcht2vW8zUZ1QAPFPsDNDSPMUGcC1r94vfHDFdlz4n3PN4Or6q3yg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Baju Koko New Year",
        brand: "Hermes",
      },
    ];
    return (
      <>
        <h1 className="text-center">{title}</h1>
        <div className="p-2 d-flex justify-content-around">
          {this.state.data.map(({ img, name, brand }, index) => {
            return (
              <ClassComponent img={img} name={name} brand={brand} key={index} />
            );
          })}
        </div>
        <Button
          onClick={() => {
            this.setState({
              data: newItem,
            });
          }}
        >
          Next Page
        </Button>
      </>
    );
  }
}
