import React, { useState } from 'react';
import Cart from './Cart';
import Product from './Product';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

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

            if(productInCart === undefined && item.countInStock > 0){
                productInCart = {
                    ...item,
                    quantity: 1,
                }
                productInCart.countInStock--;
            
                newCart.push(productInCart);
            }else if(productInCart.countInStock > 0) {
                productInCart.quantity++;
                productInCart.countInStock--;
            }else {
                window.alert('oh no fucky whucky no more item piss off');
            }

        setProduct(newCart);
        
    }

    const removeFromCart = (e,item) => {
        e.preventDefault();
        let newCart = [...product];
        newCart.splice(product.indexOf(item),1);
        setProduct(newCart);
    };

    const clearCart = (e) => {
        e.preventDefault();
        setProduct('');
    };

    const increment = (e, item) =>{
        e.preventDefault();
        let newCart = [...product];
        let index = product.indexOf(item);
        if(0 < newCart[index].countInStock){
            item.quantity++;
            newCart[index].countInStock--;
            setProduct(newCart);
        }
    };
    const decrement = (e, item) =>{
        e.preventDefault();
        let newCart = [...product];
        let index = product.indexOf(item);
        if(item.quantity > 0){
            item.quantity--;
            newCart[index].countInStock++;
            setProduct(newCart);
        }if(item.quantity == 0){
            removeFromCart(e, item);
        }
        
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
            <Route path="/cart" element={<Cart product={product} removeFromCart={removeFromCart} increment={increment} decrement={decrement} clearCart={clearCart}/>} />
        </Routes>
    </BrowserRouter>
    
  )
       
};

export default ProductsList;
