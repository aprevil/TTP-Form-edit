import React, {Component} from 'react';
import './App.css';

class UserInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            tempFirst:"First Name" ,
            tempLast: "Last Name",
            id: "hide",
            edit: "show"

        };  
    }
    handleFirstNameChange = (event) =>{
        this.setState({tempFirst: event.target.value})
    }
    handleLastNameChange =(event) =>{
        this.setState({tempLast: event.target.value})
    }
   save = () =>{
    this.setState({
        firstName: this.state.tempFirst,
        lastName: this.state.tempLast,
        tempFirst: "",
        tempLast: "",
        id:"hide",
        edit:"show"
    })
   }
    cancel =() =>{
        this.setState({
            tempFirst: "",
            tempLast: "",
            id:"hide",
            edit:"show"
        })
    }
    edit = () => {
        this.setState({
            id: "show",
            edit:"hide"       
        })
    }

    render(){
        return(
        <div>
            <button id ={this.state.edit}   onClick ={() => this.edit()}>edit</button>
            
            <div id = {this.state.id}>
                <input type = "text" value = {this.state.tempFirst} onChange={this.handleFirstNameChange}/>
                <input type = "text" value = {this.state.tempLast} onChange={this.handleLastNameChange}/>
                <button onClick = {this.save}>save</button>
                <button onClick = {this.cancel}>cancel</button>
            </div>
            <div>
                <h1>{this.state.firstName}</h1>
                <h1>{this.state.lastName}</h1>
            </div>
        </div>

        );
    }
}
export default UserInfo;