import React, { Component }  from "react";
import  './Register.css';
class registeredUsers extends Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  showData=() =>{
    fetch('http://localhost:3002/info' ,{
       method:'GET',
       dataType: "JSON",
      headers: {
            "Content-Type": "application/json",
          }
      })
       .then(res => {
       return res.json()
        })
        .then(data => {
        this.setState({data: data })})
  }
  
render(){
  return (
    <div>
       <button onClick={this.showData}>Show</button><br></br>
      <table >
        <tr>
        <th>NAME</th>
        <th>AGE</th>
        <th>GENDER</th>
        <th>EMAIL</th></tr>
        {this.state.data.map((data)=>
            <tr> 
      
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.gender}</td>
          <td>{data.email}</td>
        </tr>
      )}
        </table>
  
    </div>
  )
}
}



export default registeredUsers;