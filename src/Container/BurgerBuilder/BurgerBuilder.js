import React, { Component } from "react"

import Aux from '../../Hock/Auxi';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger></Burger>
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;