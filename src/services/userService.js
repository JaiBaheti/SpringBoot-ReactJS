import axios from "axios";

export default class UserService{
    constructor(){
        this.url = "http://localhost:8980/user/";
        this.user=[];
    }

    async authenticate(email, password){
        return await axios.get(this.url+"auth",{
            params:{"uname":email,"password":password}
        }).then(response=>{       
            return response;           
        });
    }
    async persist(user){
        return await axios.post(this.url+"addUser",user).then(response=>{
            console.log(response);
        });
    }
}