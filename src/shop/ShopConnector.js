import React, {Component} from 'react'
import  {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import {loadData} from './../data/ActionCreator'
import {addToCart, updateCartQuantity, removeFromCart, clearCart} from './../data/CartActionCreators'
import {Shop} from './Shop'
import {DataTypes} from './../data/Types'
import {Cart} from './Cart'

const mapStateToProps = (store)=>{
   return  {...store}
}

const mapDispatchToProps ={
     loadData,
     addToCart,
     updateCartQuantity,
     removeFromCart,
     clearCart
}

const productsFilter = (products =[], category)=>
(!category || category === "All")
    ? products
    : products.filter(p => p.category.toLowerCase() === category.toLowerCase());


export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component{
        render(){
            return (
               <Switch>
                   <Route path='/shop/products/:category?' render={(routeProps)=>
                       <Shop {...this.props} {...routeProps} products={
                           productsFilter(this.props.products, routeProps.match.params.category)
                       } />
                   } />
                   <Route path='/shop/cart/' 
                          render={(routeProps)=> <Cart 
                          removeFromCart={this.props.removeFromCart} 
                          updateCartQuantity={this.props.updateCartQuantity}
                          clearCart={this.props.clearCart}
                          cart={this.props.cart}
                          cartPrice={this.props.cartPrice} />} />
                   <Redirect to='/shop/products' />
               </Switch> 
        )}
        componentDidMount(){
            this.props.loadData(DataTypes.PRODUCTS);
            this.props.loadData(DataTypes.CATEGORIES);
        }
    }
)