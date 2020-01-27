
import React,{Component} from "react";

class Login extends Component {
  constructor(){
    super()
    this.state={
      isAuthenticated:"",
      name:"",
      email:"",
    }
  }
  initialValue=()=>{
   this.setState({
    isAuthenticated:"",
    name:"",
    email:""
   })
  }
  handleChange=(e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  handleClick=()=>{
    const info = {
    name:this.state.name,
    email:this.state.email,
    }
    fetch('http://localhost:3002/login' ,{
      method:'POST',
      dataType: "JSON",
      headers: {
      "Content-Type": "application/json",
      },
      body : JSON.stringify(info)
    })
      .then(res => {
      return res.json()
      })
      .then(data=>{
      this.setState({isAuthenticated:data})
    });
      this.initialValue()
  }
  render(){
  return (
    <div>
      <h3>User Login</h3>
     name: <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
      email:<input type="email" name='email'value={this.state.email} onChange={this.handleChange}/>
      <button onClick={this.handleClick}>Login</button>
      <h5>{this.state.isAuthenticated}</h5>
    </div>
  )
}
}
export default Login;