import React ,{ Component}from "react";
import Button from 'react-bootstrap/Button';
import  './Register.css';
class Register extends Component {
 constructor(){
    super()
    this.state={  
    data:[],
    name:"",
    age : Number,
    gender:"",
    email :"",
    value:"Admin"
    }   
  }
 initialState=()=>{
   this.setState({
    name:"",
    age : Number,
    gender:"",
    email :"",
    value:"Admin"
   })
 }
  handleChange=(e) =>{
   this.setState({[e.target.name]: e.target.value})
 }
  handleClick=() =>{
    const info={
      name:this.state.name,
      age:this.state.age,
      gender:this.state.gender,
      email:this.state.email,
    }
    fetch('http://localhost:3002/person',{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(info)
    })
    .then(res=>{
    return res.json()});
    this.initialState();

  }
  
  render(){
    const {reset,register}=this.props;
    console.log(register)
    return(  
      
      <div>
        <label>select</label>
        <select>
        <option value={this.state.value}>Admin</option>
        <option value={this.state.value}>developer</option></select>
        <h2 className="header" >Registration form</h2><br></br>
        <label className='label'>NAME:<input type='text' name='name' value={this.state.name} onChange={this.handleChange}/></label><br></br><br></br>
        <label className='label'>AGE:<input type='number' name='age' value={this.state.age}   onChange={this.handleChange}/></label><br></br><br></br>
        <label className='label'> GENDER:<input type='text' id="list" name='gender' value={this.state.gender} onChange={this.handleChange}/></label><br></br><br></br>
        <label className='label'> EMAIL:<input type='email' name='email' value={this.state.email} onChange={this.handleChange}/></label><br></br><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="info" onClick={this.handleClick}>submit form</Button>&nbsp;&nbsp;
        &nbsp;<Button variant="info" onClick={reset()}>reset</Button>
       
      </div>
     
    );
  }
}

export default Register;