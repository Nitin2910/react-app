import React from 'react';
import Aux from '../../Hock/Auxi';
import LayoutCss from './Layout.css';
const layout = (props) => (
    <Aux>

        <div>Tool bar , Side Drawer , Backdrop</div>

        <main className={LayoutCss.Content}>
            {props.children}
        </main>
    </Aux>
);



export default layout;