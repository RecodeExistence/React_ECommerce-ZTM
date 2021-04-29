import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Header from './components/header/header.component'; 
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'; 


import './App.css';
import './pages/homepage/homepage.styles.scss';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
    return (
      <div className="App">
      <Header />
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/sign-in-and-sign-up" component={SignInAndSignUpPage}/>
        </Switch>
       </div>    
    ) 
  }

export default App;
