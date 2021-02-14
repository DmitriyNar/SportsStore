import React, {Component} from 'react'
import {CartRows} from './CartRows' 
import {Link} from 'react-router-dom'

export class Cart extends Component{
    render(){
        return (
        <div className='container-fluid'> 
            <h4 className='bg-info text-white text-center m-3 p-3' >Cart</h4>
            <table className='table table-striped table-bordered p-2 m-2'>
                <thead>
                    <tr>
                        <th>Name</th><th>Quantity</th><th>price</th><th>Delete</th>
                    </tr>
                </thead>
                <CartRows cart={this.props.cart}
                          updateCartQuantity={this.props.updateCartQuantity}
                          removeFromCart={this.props.removeFromCart} 
                          cartPrice={this.props.cartPrice}/>
                          
            </table>
            <div className='bg-light text-center'>
                <button onClick={()=>this.props.clearCart()} className='btn btn-large btn-danger'>Clear Cart</button>
            </div>
            <div className="bg-light text-center text-white  p-2 m-1">
                <Link to='/shop' className='btn btn-primary'>
                    Continue Shopping
                </Link>
                <Link className='btn btn-primary  m-1' to='#'>
                        Checkout    
                </Link>
            </div>
        </div>)
    }
} 