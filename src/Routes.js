import React,{Component} from "react";
import registeredUsers from './registeredUsers';
import Topics from './Topics';
import Register from './container/index';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";


class Routes extends Component{
  render(){
    return(
      <Router>
      <div>
         
          <li>
          <Link to="/Register">Register</Link>
          </li>
          <li>
          <Link to="/Login">Login</Link>
          </li>
          <li>
          <Link to="/registeredUsers">registeredUsers</Link>
          </li>
          <li>
          <Link to="/topics">Topics</Link>
          </li>
          <Switch>
          
          <Route path="/Register" component={Register}/>
          
          <Route path="/Login" component={Login}/>
          
          <Route path="/topics" component={Topics}/>
          
          <Route path="/registeredUsers"  component={registeredUsers}/>
          
          </Switch>
      </div>
      </Router>
    )
  }
}

export default Routes;









