import React from 'react';
import BurgerCss from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';



const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map((salad) => {
            return [...Array(props.ingredients[salad])].map((_, i) => {
                return <BurgerIngredient key={salad + i} type={salad}></BurgerIngredient>
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start adding ingredients</p>
    }
    console.log(transformedIngredients);

    return (

        <div className={BurgerCss.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
};

export default burger;