import {Component} from "react";
import { withRouter } from "react-router-dom";
import UserService from "../services/userService";

class Register extends Component{
    constructor(props){
        super(props);
        this.service =new UserService();
        this.state={
            uname:'',
            email:'',
            password:''
        }
    }


    handleInput=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    register = (data,event)=>{
        this.service.persist(this.state).then(data=>{
            data=this.state;
        });
        this.props.history.push({ pathname: "/login" });
    }
    render(){
        return(
            <div>
                <form>
                    Username <input type="text" name="uname" value={this.state.uname}  onChange={this.handleInput}/><br/>
                    Email <input type="email" name="email" value={this.state.email} onChange={this.handleInput}/><br/>
                    Password <input type="password" name="password" value={this.state.password} onChange={this.handleInput}/><br/>
                    <button type="button" onClick={()=>this.register()}>Register</button>
                </form>
            </div>
        );
    }
}
export default withRouter(Register);