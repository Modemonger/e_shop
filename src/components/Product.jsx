import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import data from '../data/Data';


const Product = ({addToCart}) => {

  return(
    <div>
        {
            data.map((item, index) => (

                <Card style={{ width: '18rem' }} key={index}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                        {item.description}
                        </Card.Text>
                        <Card.Text>$ {item.price}</Card.Text>
                        <Button variant="primary" onClick={()=>addToCart(item)}>Pirkti</Button>
                    </Card.Body>
                </Card>
            ))
        }
        
    </div>
  ) 
};

export default Product;
