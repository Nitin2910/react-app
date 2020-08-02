import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';

import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>

      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
