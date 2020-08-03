import React, { Component } from "react"
import Clock from '../../Components/Clock/Clock';
import Aux from '../../Hock/Auxi';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Clock></Clock>
                <Burger></Burger>
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;