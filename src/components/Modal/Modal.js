import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import './Backdrop.css';

const Modal = (props) => {
    const redirectToUrl = () => {
        window.location.href=props.url
    }

    return (
        <div className="Modal">
            <Button className="recipeLink" onClick={redirectToUrl}>
               View full recipe
            </Button>
            <ListGroup>
            {props.ingredients.map(ingredient => (
                <ListGroup.Item key={Math.floor(Math.random() * 10000)}>{ingredient.text}</ListGroup.Item>
            ))}
            </ListGroup>
            
        </div>
    )
}

export default Modal;