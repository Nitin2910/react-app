import React from 'react';
import Classes from './SlideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../Hock/Auxi';
const slideDrawer = (props) => {
    let attchedClasses = [Classes.SlideDrawer , Classes.Close];
    if(props.open){
        attchedClasses = [Classes.SlideDrawer , Classes.Open];
    }
    return (
        <Auxi>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attchedClasses.join(' ')}>
                <div className={Classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>


            </div>
        </Auxi>
    );
};

export default slideDrawer;
