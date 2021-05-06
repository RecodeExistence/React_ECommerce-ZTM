import React, { Fragment } from 'react';
import { Route, Switch} from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import Header from './components/header/header.component'; 
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'; 


import './App.scss';
import './pages/homepage/homepage.styles.scss';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentUser : null
    }

  }
  
  unsubscribeFromAuth = null; 
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user})
    });
  }
  
  componentWillUnmount = () => this.unsubscribeFromAuth();

  render(){
    return (
      <div className="App">
      {
          this.state.currentUser ? 
      <Fragment>
           <div className="user-name-display">
              <div className='username'>Logged In as {this.state.currentUser.displayName}</div> 
          </div>
    </Fragment>
            : null
        }
      <Header userLoggedIn={this.state.currentUser} />
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/sign-in-and-sign-up" component={SignInAndSignUpPage}/>
        </Switch>
       </div>
    )
  }
}

export default App;
