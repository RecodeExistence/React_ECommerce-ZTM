import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component'; 
import './pages/homepage/homepage.styles.scss';


const HatsPage = ({match}) => {
  console.log(match.url);
  return (
    <div>
        <h1>Hats</h1>
        <Link to="/">Home</Link>
  </div>
  )
}
function App() {
    return (
      <div>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/hats" component={HatsPage} />
        </Switch>
       </div>    
    ) 
  }

export default App;
