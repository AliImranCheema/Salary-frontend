/*import React from 'react';
import Visiting from './Visiting';
import {Switch , Route} from 'react-router-dom';
import Salary from './Salary';

function App(){
  return(
    <Switch>
      <Route exact path="/" component={Visiting} />
      <Route path="/salary" component={Salary} />
    </Switch>
  );
}

export default App;*/
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Visiting from './Visiting';
import Salary from './Salary';



export default function App() {
  return (
    <Router>
      <div>
        <nav style={{float : "right"}}>
          <button style={{backgroundColor : "yellow"}}><Link to="/">Visiting</Link></button>
          <button style={{backgroundColor : "red"}}><Link to="/salary">Salary</Link></button>
        </nav>

        <Switch>
          <Route path="/salary">
            <Salary />
          </Route>
          <Route path="/">
            <Visiting />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

