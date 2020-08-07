import React from 'react';
import Auxi from '../../../Hock/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(salad => {
            return <li key={salad}><span style={{ textTransform: 'capitalize' }}>{salad}</span>: {props.ingredients[salad]}</li>
        });

    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>A Delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxi>
    )
};


export default orderSummary;