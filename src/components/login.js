import { Component } from "react";
import { withRouter } from "react-router-dom";
import UserService from "../services/userService";

class Login extends Component{
    constructor(props){
        super(props);
        this.service = new UserService();
        this.state={
            email:null,
            password:null,
            user:[],
            errmsg:null
        }
    }
    
    onLogin = (data,event) =>{
        this.service.authenticate(this.state.email, this.state.password).then(response=>{
            if(response.status === 200)
                this.setState({
                    user: response.data
                });
                if (this.state.user) {
                    localStorage.setItem("token", JSON.stringify(this.state.user));
                    this.props.history.push({ pathname: "/dashboard" });
                    //console.log(this.state.email);
                }
            }).catch(error=>{
                this.setState({
                    errmsg:"Invalid credentials",
                    password:''
                })
            });        
    }

    handleInput = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    render(){
        return(
            <div>
                <form>
                    {this.state.errmsg}<br/>
                    Email:<input name="email" value={this.state.email} onChange={this.handleInput} type="text"/><br/>
                    Password:<input name="password" value={this.state.password} onChange={this.handleInput} type="password"/><br/>
                    <button type="button" onClick={()=>this.onLogin()}>Login </button>
                </form>
            </div>
        );
    }
}
export default withRouter(Login);