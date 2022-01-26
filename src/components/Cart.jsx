import React from 'react';
import { Button } from 'react-bootstrap';

const Cart = ({product, removeFromCart, increment, decrement, clearCart}) => {
  //console.log(product);
  const getTotal = () =>{
    const reducer = (previousValue, {price, quantity}) => previousValue + price*quantity;
    if(product)
    return product.reduce(reducer, 0);
  };


  if(product.length)
  return (    
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <td colSpan={3}>Total price: {getTotal()}</td>
            <td colSpan={2}><Button variant="danger" onClick={(event) => {clearCart(event, product)}}>Clear cart</Button></td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
        {
            product.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td><Button onClick={(event) => {increment(event, item)}}>+</Button>{item.quantity}<Button onClick={(event) => {decrement(event, item)}}>-</Button></td>
                <td>{item.price * item.quantity}</td>
                <td><Button variant="danger" onClick={(event) => {removeFromCart(event, item)}}>Remove</Button></td>
              </tr>
            ))
        }
        </tbody>
      </table>
    </div>
  ) 

  else
      return(
        <div>
          Sorry your cart is empty, dumbass
        </div>
      )
};

export default Cart;
