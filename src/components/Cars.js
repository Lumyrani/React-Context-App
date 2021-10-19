import React, { Component } from 'react'
import Car from './Car'
import MyContext from './MyContext'
export default class Cars extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {context=>(     
                      <div>
                {
                    //  Object.keys(this.props.cars).map(carid=> <Car id ={carid}key ={carid} 
                    //     car={this.props.cars[carid]} incPrice ={this.props.incPrice} decPrice={this.props.decPrice}></Car>)
                    Object.keys(context.cars).map(carid=> <Car id ={carid}key ={carid} 
                        car={context.cars[carid]} 
                        incPrice={context.incPrice}></Car>)
                     }
        
    
            </div>)}
     
            </MyContext.Consumer>
        )
    }
}
