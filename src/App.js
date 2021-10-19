import React, { Component } from "react";
import MyProvider from "./components/MyProvider";
import ProductList from "./components/ProductList";


export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
      // cars: {
      //   car101: { name: "Honda", price: 500000 },
      //   car102: { name: "BMW", price: 1500000 },
      //   car103: { name: "Benz", price: 2500000 },
      // },
    // };
  // }
//  incrementCarPrice =this.incrementCarPrice.bind(this)
//  decrementCarPrice =this.decrementCarPrice.bind(this)

//   incrementCarPrice(carid) {
//     let car_copy = Object.assign({},this.state.cars);
//     car_copy[carid].price +=10000;
//     console.log("car_copy")
//     this.setState({ car_copy });
//   }

//   decrementCarPrice(carid) {
//     let car_copy = Object.assign({},this.state.cars);
//     car_copy[carid].price -= 5000;
//     this.setState({ car_copy });
//   }
  render() {
    return (
      <div>
        <MyProvider>
          <ProductList/>
        {/* <ProductList
          cars={this.state.cars}
          incPrice={this.incrementCarPrice}
          decPrice={this.decrementCarPrice}></ProductList> */}
      </MyProvider>
      </div>
    );
  }
}
