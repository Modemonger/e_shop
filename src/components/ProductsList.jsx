import React, { useState } from 'react';
import Cart from './Cart';
import Product from './Product';
import { BrowserRouter ,Router, Link, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const ProductsList = () => {

    // prekiu krepseliui
    const [product, setProduct] = useState([]);

    const addToCart= (item) => {
        // susikuriu state esancio krepselio kopija
        const newCart = [...product];

        //tikrinu, ar jau yra preke tokiu pavadinimu
        let productInCart = newCart.find(
            (localVar) => item.id === localVar.id
        )       

            if(productInCart === undefined){
                productInCart = {
                    ...item,
                    quantity: 1,
                }
                productInCart.countInStock--;
            
                newCart.push(productInCart);
            }else if(productInCart.countInStock > 0) {
                productInCart.quantity++;
                productInCart.countInStock--;
            }
            else {
                console.log("sorry out of stock");
            }

        setProduct(newCart);
        
    }

    const removeFromCart = (e,item) => {
        e.preventDefault();
        console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.remove();
        let newCart = [...product];
        newCart.splice(product.indexOf(item),1);
        setProduct(newCart);
    };
//console.log(product);
    

  return (

    <BrowserRouter>
        <Navbar bg='light' variant="light">
            <Container>
                <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Product List</Link>
                        <Link to="/cart" className="nav-link">Cart</Link>
                    </Nav>
            </Container>
        </Navbar>
        <Routes>
            <Route path="/" element={<Product addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart product={product} removeFromCart={removeFromCart}/>} />
        </Routes>
    </BrowserRouter>
    
  )
       
};

export default ProductsList;
