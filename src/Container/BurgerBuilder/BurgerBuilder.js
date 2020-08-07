import React, { Component } from 'react';
import Aux from '../../Hock/Auxi';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.9

}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        //  const ingredients = {
        //     ...this.state.ingredients
        // };
        const sum = Object.keys(ingredients).map(salad => {
            return ingredients[salad];
        })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition + oldPrice;
        this.setState({
            totalPrice: newPrice, ingredients: updateIngredients
        })
        this.updatePurchaseState(updateIngredients);

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice, ingredients: updateIngredients
        })
        this.updatePurchaseState(updateIngredients);
    }

    purchaseHandler = () =>{
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false});
    }

    purchaseContinueHandler = () => {
        alert('You Continue');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} 
                    price ={this.state.totalPrice}
                    purchaseCanceled = {this.purchaseCancelHandler}
                    purchaseContinue = {this.purchaseContinueHandler}/>
                </Modal>
                
                <Burger ingredients={this.state.ingredients} ></Burger>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                    ingredientDeducted={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                ></BuildControls>
            </Aux>
        );
    }

}

export default BurgerBuilder;