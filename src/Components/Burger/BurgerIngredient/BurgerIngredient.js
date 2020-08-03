import React, { Component } from 'react';
import BurgerIngCss from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() { 
        console.log(this.props.type);
        let ingredient = null;
        ingredient =<div className={BurgerIngCss.BreadBottom}></div>;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={BurgerIngCss.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = <div className={BurgerIngCss.BreadTop}>
                    <div className={BurgerIngCss.Seeds1}></div>
                    <div className={BurgerIngCss.Seeds2}></div>
                </div>;
                break;
            case ('meat'):
                ingredient = <div className={BurgerIngCss.Meat}>
                </div>;
                break;
            case ('cheese'):
                ingredient = <div className={BurgerIngCss.Cheese}>
                </div>;
                break;
            case ('salad'):
                ingredient = <div className={BurgerIngCss.Salad}>
                </div>;
                break;
            case ('bacon'):
                ingredient = <div className={BurgerIngCss.Bacon}>
                </div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }

}

 BurgerIngredient.propTypes = {
     type : PropTypes.string.isRequired
 };

export default BurgerIngredient;