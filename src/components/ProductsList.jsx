import React, { useState } from 'react';
import Cart from './Cart';
import Product from './Product';

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

                newCart.push(productInCart);
            }

        setProduct(newCart);
        
    }
console.log(product);
    

  return (

    <div>
        <Product addToCart={addToCart}/>
        <Cart/>
    </div>
  )
       
};

export default ProductsList;
