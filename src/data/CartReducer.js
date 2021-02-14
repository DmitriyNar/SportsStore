import {ActionTypes} from './Types'

export const CartReducer =(dataStore, action)=>{
    let newStore = {cart:[], cartItems:0, cartPrice:0, ...dataStore}
        let q = action.payload ?  action.payload.quantity : null ;
        let p = action.payload ? action.payload.product : null;
    switch(action.type){
        case ActionTypes.CART_ADD:
            
            let exists = newStore.cart.find(el=> el.product.id === p.id);
            if(exists) exists.quantity += q;
            else{
                newStore.cart = [...newStore.cart, action.payload]
            } 
            newStore.cartItems += q;
            newStore.cartPrice += q * p.price;
            return newStore
        case ActionTypes.CART_UPDATE:
            let product = newStore.cart.find(el=> el.product.id === p.id);
            let diff = q - product.quantity 
            if(product) product.quantity = q;
            newStore.cartItems += diff; 
            newStore.cartPrice += diff * product.product.price;
            return newStore
        case ActionTypes.CART_REMOVE:
            let num = newStore.cart.find(el=> el.product.id === action.payload.product.id).quantity; 
            newStore.cart = newStore.cart.filter(el=> el.product.id !== action.payload.product.id);
            newStore.cartItems -= num;
            newStore.cartPrice -= action.payload.product.price * num;
            return newStore
        case ActionTypes.CART_CLEAR:
            newStore ={...dataStore, cart:[], cartItems:0, cartPrice:0}
            return newStore
        default: return dataStore || {}
    }
}