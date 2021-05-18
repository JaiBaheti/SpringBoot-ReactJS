import { Component } from "react";
import { withRouter } from "react-router";

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            email:null,
            user:[]
        }

    }
    componentDidMount(){
        this.checkLogin();
        //console.log(this.state.user);
    }
    checkLogin = ()=>{
        
        if(!localStorage.getItem("token"))
            this.props.history.push({pathname:"/login"});
        else{
            this.setState({
                user:JSON.parse(localStorage.getItem("token"))
            });
        }    
    }
    logout =()=>{
        localStorage.clear();
        this.setState({
            user:[]
        })
        this.props.history.push({pathname:"/login"});
    }
    render(){
        return(
            <div>
                <h1>DashBoard</h1>
                <h2>Logged In: {this.state.user.name}</h2>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}
export default withRouter (Dashboard);