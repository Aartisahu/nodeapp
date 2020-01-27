import React,{Component} from "react";
import Routes from './Routes'
import "./App.css"

class App extends Component{
  state= { render: false }
 handleClick=()=>{
  this.setState({render : !this.state.render})
 }
  render() {
  return (
   
      <div>
      <button onClick={()=>this.handleClick()}>select list</button><br></br>
      { this.state.render &&
        <Routes/>
      }   
      </div>
    
  );
}

}
export default App;





