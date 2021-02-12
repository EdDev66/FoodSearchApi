import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Recipes = (props) => {
    return (
        <div className="card-container">
        <Card className="card-component" style={{ width: '20rem', }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            </Card.Body>
            <Card.Text>
                Calories: {Math.floor(props.calories)}
            </Card.Text>
            <Button onClick={() => props.viewRecipe(props.ingredients, props.url)}>View Recipe</Button>
        </Card>
        </div>
    )
}

export default Recipes;