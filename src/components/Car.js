import React, { Component } from 'react'
// import MyContext from './MyContext'

export default class Car extends Component {


    render() {
        return (
            <div> 
                ({this.props.car.name}
                {this.props.car.price}
            
                {/* <MyContext.Consumer> */}
                    {/* {context=>( */}
                        {/* <div> */}
                        <button onClick={()=>{this.props.incPrice(this.props.id)}}>+</button>
                        <button onClick={()=>{this.props.decPrice(this.props.id)}}>-</button>)
                         {/* </div> */}
// 
    
                {/* {this.props.car.name}: <br/>Updated Price :
           
                {this.props.car.price}

                <button onClick={()=>{this.props.incPrice(this.props.id)}}>+</button>
                <button onClick={()=>{this.props.decPrice(this.props.id)}}>-</button>
                 */}
                
                {/* </MyContext.Consumer> */}
            </div>
        )
    }
}
