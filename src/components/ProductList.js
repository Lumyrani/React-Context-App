import React, { Component } from 'react'
import Cars from './Cars'

export default class ProductList extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <div>
                <h1>Products Page</h1>
                  <Cars ></Cars>  
                {/* <Cars cars={this.props.cars}incPrice={this.props.incPrice} decPrice ={this.props.decPrice}></Cars>  */}
            </div>
        )
    }
}
