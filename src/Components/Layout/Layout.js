import React , {Component} from 'react';
import Auxi from '../../Hock/Auxi';
import LayoutCss from './Layout.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SlideDrawer from '../../Components/Navigation/SlideDrawer/SlideDrawer';

class Layout extends Component{

    state = {
        showSideDrawer : true
    }

    sideDrawerCLoseHandler = () => {
        this.setState({showSideDrawer : false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer}
        });
    }

    render (){
    return (
        <Auxi>

        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SlideDrawer open={this.state.showSideDrawer}
        closed={this.sideDrawerCLoseHandler}/>
        <main className={LayoutCss.Content}>
            {this.props.children}
        </main>
    </Auxi>
    )
    }
}



export default Layout;