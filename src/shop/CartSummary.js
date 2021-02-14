import React, {Component} from 'react'
import {Link} from 'react-router-dom' 

export class CartSummary extends Component{
     getClassList =()=>{
        return `btn btn-sm bg-dark text-white ${ this.props.cartItems > 0 ? '' : 'disabled'}`
    }
     getSummary = ()=>{
         if (!this.props.cartItems)
            return (<span>You cart is (empty) </span>)
        else
            return (<span> {this.props.cartItems} items in the cart. Cart price {this.props.cartPrice} </span>) 
    }

    render(){
        return (
            <div className='float-right'>
                <small>
                {this.getSummary()}
                    <Link to='/shop/cart' className={this.getClassList()}>
                        <i className='fa fa-shopping-cart' ></i>
                    </Link>
                </small>
            </div>
        )
    }
}