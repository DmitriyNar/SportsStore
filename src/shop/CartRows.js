import React, {Component} from 'react'

export const CartRows=(props)=>(
    <tbody>
        {
        props.cart.map((el=>(
            <tr key={el.product.name}>
                <td>{el.product.name}</td>
                <td><input  type='number' value={el.quantity} onChange={(e)=>props.updateCartQuantity(el.product, e.target.value)} /></td>
                <td>{el.product.price.toFixed(2)}</td>
                <td><button className='btn btn-large btn-warning' onClick={()=>props.removeFromCart(el.product)} >Delete</button> </td>
            </tr>
         )))
        }
        <tr key={'noon'}>
            <td colSpan='2' className='text-right'>Total  </td>
            <td colSpan='2' className='text-left'>{props.cartPrice.toFixed(2) || 0}</td>
        </tr>
    </tbody>
)