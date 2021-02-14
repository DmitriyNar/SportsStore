import React, {Component} from 'react'
import {ProductList} from './ProductList'
import {CategoryNavigation} from './CategoryNavigation'
import {CartSummary} from './CartSummary'

const products =  [
    { id: 1, name: "P1", category: "Watersports",
        description: "P1 (Watersports)", price: 3 },
    { id: 2, name: "P2", category: "Watersports",
       description: "P2 (Watersports)", price: 4 },
    { id: 3, name: "P3", category: "Running",
       description: "P3 (Running)", price: 5 },
    { id: 4, name: "P4", category: "Chess",
       description: "P4 (Chess)", price: 6 },
    { id: 5, name: "P5", category: "Chess",
       description: "P6 (Chess)", price: 7 },
  ]

export class Shop extends Component{
    render(){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col bg-dark text-white'>
                        <div className="navbar-brand">SPORTS STORE</div>
                        <CartSummary cartItems={this.props.cartItems} cartPrice={this.props.cartPrice} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 p-2'>
                        <CategoryNavigation baseURL='/shop/products' categories={["Watersports", "Soccer", "Chess", "Running"]} /> 
                    </div>
                    <div className='col-9 p-2'>
                        < ProductList addToCart={this.props.addToCart} products={this.props.products}/>
                    </div>
                </div>
            </div>
        )
    }
}