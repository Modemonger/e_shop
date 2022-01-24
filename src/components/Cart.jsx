import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cart = ({product, removeFromCart}) => {
  console.log(product);
  const getTotal = () =>{
    const reducer = (previousValue, {price, quantity}) => previousValue + price*quantity;
    if(product)
    return product.reduce(reducer, 0);
  };

  return (    
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <td colSpan={3}>Bendra suma: {getTotal()}</td>
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
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
                <td><Button variant="danger" onClick={(event) => {removeFromCart(event, item)}}>Remove</Button></td>
              </tr>
            ))
        }
        </tbody>
      </table>
    </div>
  ) 
};

export default Cart;
